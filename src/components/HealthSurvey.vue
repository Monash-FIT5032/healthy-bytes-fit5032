<script setup>
import { ref } from 'vue'

const formData = ref({
  fullName: '',
  email: '',
  age: '',
  gender: '',
  currentActivityLevel: '',
  healthGoals: '',
  dietaryPreferences: '',
  existingConditions: '',
  hoursPerDay: '',
  breakFrequency: '',
  workPosture: ''
})
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Onboarding Survey</h2>
    <form>
      <!-- Personal Information Section -->
      <div class="mb-4">
        <h4>Personal Information</h4>
        <div class="mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullName"
            v-model="formData.fullName"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required />
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control" id="age" v-model="formData.age" required />
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select class="form-select" id="gender" v-model="formData.gender" required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <!-- Health and Lifestyle Section -->
      <div class="mb-4">
        <h4>Health and Lifestyle</h4>
        <div class="mb-3">
          <label for="currentActivityLevel" class="form-label">Current Activity Level</label>
          <select
            class="form-select"
            id="currentActivityLevel"
            v-model="formData.currentActivityLevel"
            required
          >
            <option value="" disabled selected>Select your activity level</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (exercise 1-3 days per week)</option>
            <option value="moderate">Moderate (exercise 3-5 days per week)</option>
            <option value="active">Active (exercise 6-7 days per week)</option>
            <option value="very active">Very Active (hard exercise every day)</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="healthGoals" class="form-label">Health Goals</label>
          <select class="form-select" id="healthGoals" v-model="formData.healthGoals" required>
            <option value="" disabled selected>Select your health goals</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="improve_endurance">Improve Endurance</option>
            <option value="increase_flexibility">Increase Flexibility</option>
            <option value="general_fitness">General Fitness</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="dietaryPreferences" class="form-label">Dietary Preferences</label>
          <select
            class="form-select"
            id="dietaryPreferences"
            v-model="formData.dietaryPreferences"
            required
          >
            <option value="" disabled selected>Select your dietary preference</option>
            <option value="none">None</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="existingConditions" class="form-label"
            >Do you have any existing health conditions?</label
          >
          <textarea
            class="form-control"
            id="existingConditions"
            rows="3"
            v-model="formData.existingConditions"
          ></textarea>
        </div>
      </div>

      <!-- Programming and Work Habits Section -->
      <div class="mb-4">
        <h4>Programming and Work Habits</h4>
        <div class="mb-3">
          <label for="hoursPerDay" class="form-label">How many hours do you code per day?</label>
          <input
            type="number"
            class="form-control"
            id="hoursPerDay"
            v-model="formData.hoursPerDay"
            required
          />
        </div>
        <div class="mb-3">
          <label for="breakFrequency" class="form-label"
            >How often do you take breaks while working?</label
          >
          <select
            class="form-select"
            id="breakFrequency"
            v-model="formData.breakFrequency"
            required
          >
            <option value="" disabled selected>Select your break frequency</option>
            <option value="every_30_min">Every 30 minutes</option>
            <option value="every_1_hour">Every 1 hour</option>
            <option value="every_2_hours">Every 2 hours</option>
            <option value="seldom">Seldom</option>
            <option value="never">Never</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="workPosture" class="form-label">Describe your typical work posture</label>
          <textarea
            class="form-control"
            id="workPosture"
            rows="3"
            v-model="formData.workPosture"
            required
          ></textarea>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
