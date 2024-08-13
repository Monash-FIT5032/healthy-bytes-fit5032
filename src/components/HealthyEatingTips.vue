<script setup>
import { ref } from 'vue'
let areTipsVisible = ref(true)

const myCustomUrl = ref('https://intake24.com/')

const healthTips = ref([
  { id: 1, tip: 'Eat a variety of foods' },
  { id: 2, tip: 'Base your diet on plenty of foods rich in carbohydrates' },
  { id: 3, tip: 'Replace saturated with unsaturated fat' },
  { id: 4, tip: 'Enjoy plenty of fruits and vegetables' },
  // { id: 5, tip: 'Reduce salt and sugar intake' },
  // { id: 6, tip: 'Eat regularly, control the portion size' },
  // { id: 7, tip: 'Drink plenty of fluids' },
  // { id: 8, tip: 'Maintain a healthy body weight' },
  // { id: 9, tip: 'Get on the move, make it a habit!' },
  // { id: 10, tip: 'Start now! And keep changing gradually.' },
  // { id: 11, tip: 'Choose whole grains over refined grains' },
  // { id: 12, tip: 'Include lean sources of protein in your meals' },
  // { id: 13, tip: 'Limit processed and packaged foods' },
  // { id: 14, tip: 'Cook meals at home instead of eating out' },
  // { id: 15, tip: 'Read food labels and choose healthier options' },
  // { id: 16, tip: 'Limit your alcohol consumption' },
  // { id: 17, tip: 'Practice mindful eating and listen to your body' },
  // { id: 18, tip: 'Avoid skipping meals, especially breakfast' },
  // { id: 19, tip: 'Limit your intake of sugary beverages' },
  // { id: 20, tip: 'Include healthy fats in your diet, such as avocados and nuts' },
  // { id: 21, tip: 'Try new recipes and experiment with different flavors' },
  // { id: 22, tip: 'Eat a balanced breakfast to start your day off right' },
  // { id: 23, tip: 'Limit your intake of processed meats' },
  // { id: 24, tip: 'Stay hydrated by drinking enough water throughout the day' },
  // { id: 25, tip: 'Include probiotics in your diet for a healthy gut' },
  // { id: 26, tip: 'Limit your intake of added sugars' },
  // { id: 27, tip: 'Practice portion control to avoid overeating' },
  // { id: 28, tip: 'Include a variety of colorful fruits and vegetables in your meals' },
  // { id: 29, tip: 'Limit your intake of high-sodium foods' },
  { id: 30, tip: 'Stay active and incorporate exercise into your daily routine' }
])
/**
 * Use v-if to only show the Header if it is a complete beginner!
 * Use v-for to display tips from a list (JSON)
 * Putting it all together to only show ALL tips if it is a beginner.
 */
</script>

<template>
  <button class="btn" @click="areTipsVisible = !areTipsVisible">Toggle Tips</button>
  <div class="tips" v-if="areTipsVisible">
    <h1>Healthy Eating Tips s</h1>
    <!-- Show tips to the user -->
    <ul>
      <li v-for="myTip in healthTips" v-bind:key="myTip.id">{{ myTip.tip }}</li>
    </ul>
    <a :href="myCustomUrl"
      >For more health coaching and monitoring your health intake with a physician, please visit
      Intake24</a
    >
  </div>
</template>

<style scoped>
.tips {
  /* text-align: center;
  margin-top: 30px;
  margin-bottom: 50px; */
}

.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
