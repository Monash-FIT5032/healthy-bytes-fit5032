<script setup>
import { ref } from 'vue'
let areTipsVisible = ref(false)

const myCustomUrl = ref('https://intake24.com/')

/**
 * Modified the healthTips to make them more easy to tailor for different users of our website.
 * Stage: beginner, intermediate, advanced
 * Type: diet, lifestyle, activity
 */
const healthTips = ref([
  { id: 1, tip: 'Eat a variety of foods', stage: 'beginner', type: 'diet' },
  {
    id: 2,
    tip: 'Base your diet on plenty of foods rich in carbohydrates',
    stage: 'beginner',
    type: 'diet'
  },
  { id: 3, tip: 'Replace saturated with unsaturated fat', stage: 'beginner', type: 'diet' }
  // { id: 4, tip: 'Enjoy plenty of fruits and vegetables', stage: 'beginner', type: 'diet' },
  // { id: 5, tip: 'Reduce salt and sugar intake', stage: 'beginner', type: 'diet' },
  // { id: 6, tip: 'Eat regularly, control the portion size', stage: 'beginner', type: 'diet' },
  // { id: 7, tip: 'Drink plenty of fluids', stage: 'beginner', type: 'diet' },
  // { id: 8, tip: 'Maintain a healthy body weight', stage: 'beginner', type: 'lifestyle' },
  // { id: 9, tip: 'Get on the move, make it a habit!', stage: 'intermediate', type: 'activity' },
  // {
  //   id: 10,
  //   tip: 'Start now! And keep changing gradually.',
  //   stage: 'intermediate',
  //   type: 'lifestyle'
  // },
  // { id: 11, tip: 'Choose whole grains over refined grains', stage: 'intermediate', type: 'diet' },
  // {
  //   id: 12,
  //   tip: 'Include lean sources of protein in your meals',
  //   stage: 'intermediate',
  //   type: 'diet'
  // },
  // { id: 13, tip: 'Limit processed and packaged foods', stage: 'intermediate', type: 'diet' },
  // { id: 14, tip: 'Cook meals at home instead of eating out', stage: 'intermediate', type: 'diet' },
  // {
  //   id: 15,
  //   tip: 'Read food labels and choose healthier options',
  //   stage: 'intermediate',
  //   type: 'diet'
  // },
  // { id: 16, tip: 'Limit your alcohol consumption', stage: 'intermediate', type: 'lifestyle' },
  // {
  //   id: 17,
  //   tip: 'Practice mindful eating and listen to your body',
  //   stage: 'intermediate',
  //   type: 'lifestyle'
  // },
  // {
  //   id: 18,
  //   tip: 'Avoid skipping meals, especially breakfast',
  //   stage: 'intermediate',
  //   type: 'diet'
  // },
  // { id: 19, tip: 'Limit your intake of sugary beverages', stage: 'advanced', type: 'diet' },
  // {
  //   id: 20,
  //   tip: 'Include healthy fats in your diet, such as avocados and nuts',
  //   stage: 'advanced',
  //   type: 'diet'
  // },
  // {
  //   id: 21,
  //   tip: 'Try new recipes and experiment with different flavors',
  //   stage: 'advanced',
  //   type: 'diet'
  // },
  // {
  //   id: 22,
  //   tip: 'Eat a balanced breakfast to start your day off right',
  //   stage: 'advanced',
  //   type: 'diet'
  // },
  // { id: 23, tip: 'Limit your intake of processed meats', stage: 'advanced', type: 'diet' },
  // {
  //   id: 24,
  //   tip: 'Stay hydrated by drinking enough water throughout the day',
  //   stage: 'advanced',
  //   type: 'diet'
  // },
  // {
  //   id: 25,
  //   tip: 'Include probiotics in your diet for a healthy gut',
  //   stage: 'advanced',
  //   type: 'diet'
  // },
  // { id: 26, tip: 'Limit your intake of added sugars', stage: 'advanced', type: 'diet' },
  // { id: 27, tip: 'Practice portion control to avoid overeating', stage: 'advanced', type: 'diet' },
  // {
  //   id: 28,
  //   tip: 'Include a variety of colorful fruits and vegetables in your meals',
  //   stage: 'advanced',
  //   type: 'diet'
  // },
  // { id: 29, tip: 'Limit your intake of high-sodium foods', stage: 'advanced', type: 'diet' },
  // {
  //   id: 30,
  //   tip: 'Stay active and incorporate exercise into your daily routine',
  //   stage: 'advanced',
  //   type: 'activity'
  // }
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
