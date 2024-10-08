<script setup>
import { ref, onMounted, watch } from 'vue'

// References for form input and Google Maps data
const fromLocation = ref('')
const toLocation = ref('')
const travelMode = ref('DRIVING')
const mapContainer = ref(null)
const map = ref(null)
const distanceRequest = ref(null)
const distanceResponse = ref(null)

// Initialize Google Maps and Distance Matrix Service
onMounted(() => {
  if (window.google) {
    map.value = new window.google.maps.Map(mapContainer.value, {
      center: { lat: 55.53, lng: 9.4 },
      zoom: 10
    })
  } else {
    console.error('Google Maps API is not loaded')
  }
})

/**
 * Function to calculate distance using the Distance Matrix API
 */
const calculateDistance = () => {
  if (!fromLocation.value || !toLocation.value) {
    alert('Please enter both "From" and "To" locations.')
    return
  }

  const service = new google.maps.DistanceMatrixService()
  const geocoder = new google.maps.Geocoder()
  const bounds = new google.maps.LatLngBounds()
  let markersArray = []

  const request = {
    origins: [fromLocation.value],
    destinations: [toLocation.value],
    travelMode: google.maps.TravelMode[travelMode.value],
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }

  distanceRequest.value = JSON.stringify(request, null, 2)

  // Perform the distance matrix request
  service.getDistanceMatrix(request).then((response) => {
    distanceResponse.value = JSON.stringify(response, null, 2)
    const originList = response.originAddresses
    const destinationList = response.destinationAddresses

    deleteMarkers(markersArray)

    const showGeocodedAddressOnMap = (asDestination) => {
      return ({ results }) => {
        map.value.fitBounds(bounds.extend(results[0].geometry.location))
        markersArray.push(
          new google.maps.Marker({
            map: map.value,
            position: results[0].geometry.location,
            label: asDestination ? 'D' : 'O'
          })
        )
      }
    }

    for (let i = 0; i < originList.length; i++) {
      const results = response.rows[i].elements

      geocoder.geocode({ address: originList[i] }).then(showGeocodedAddressOnMap(false))

      for (let j = 0; j < results.length; j++) {
        geocoder.geocode({ address: destinationList[j] }).then(showGeocodedAddressOnMap(true))
      }
    }
  })
}

/**
 * Function to delete markers from the map
 */
const deleteMarkers = (markersArray) => {
  for (let i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null)
  }
  markersArray = []
}
</script>

<template>
  <div class="map-view">
    <h1>Google Maps Distance Matrix API</h1>

    <!-- Form for From and To locations -->
    <div class="input-fields">
      <label for="from">From:</label>
      <input id="from" v-model="fromLocation" placeholder="Enter origin location" />

      <label for="to">To:</label>
      <input id="to" v-model="toLocation" placeholder="Enter destination location" />

      <!-- Travel mode selection (Driving or Cycling) -->
      <label for="travelMode">Travel Mode:</label>
      <select v-model="travelMode">
        <option value="DRIVING">Driving</option>
        <option value="BICYCLING">Cycling</option>
      </select>

      <!-- Button to calculate the distance -->
      <button @click="calculateDistance">Calculate Distance</button>
    </div>

    <!-- Google Map Container -->
    <div ref="mapContainer" class="map-container"></div>

    <!-- Request and Response JSON -->
    <div class="request-response">
      <h3>Request</h3>
      <pre>{{ distanceRequest }}</pre>
      <h3>Response</h3>
      <pre>{{ distanceResponse }}</pre>
    </div>
  </div>
</template>

<style>
.map-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-fields {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
}

.input-fields label {
  margin: 5px 0;
}

.map-container {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}

.request-response {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

pre {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
}
</style>
