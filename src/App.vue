<script setup>
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'
const toast = useToast()

const showSuccess = (title, description) => {
  console.log('showSuccess')
  toast.add({
    severity: 'success',
    summary: title,
    detail: description,
    life: 3000
  })
}

import { RouterLink, RouterView } from 'vue-router'
import WelcomeSection from './components/WelcomeSection.vue'
import Donations from './components/Donations.vue'
import HealthyEatingTips from './components/HealthyEatingTips.vue'
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import HomeView from './views/HomeView.vue'
import HeroSection from './components/HeroSection.vue'
import Toast from 'primevue/toast'
import LoginView from './views/LoginView.vue'

const isAuthenticated = ref(false)

const handleAuthentication = (value) => {
  isAuthenticated.value = value
}
</script>

<template>
  <Toast />
  <div v-if="isAuthenticated == true">
    <HeaderSection />

    <!-- Hide this if the current page is not the Home page -->
    <HeroSection v-if="$route.path === '/'" />

    <div class="container">
      <div class="row">
        <div class="col-9 main-content">
          <RouterView />
        </div>
        <div class="col-3 sidebar">
          <button
            type="button"
            class="btn btn-primary"
            @click="showSuccess('Success', 'You now know how to get a toast working!')"
          >
            Show Toast
          </button>
          <HealthyEatingTips />
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
  <div v-else>
    <LoginView @authenticated="handleAuthentication" />
  </div>
</template>

<style scoped></style>
