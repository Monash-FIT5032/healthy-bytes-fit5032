<script setup>
import { useToast } from 'primevue/usetoast'
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
</script>

<template>
  <Toast />

  <HeaderSection />
  <HeroSection />
  <div class="container">
    <div class="row">
      <div class="col-9 main-content">
        <HomeView />
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

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <WelcomeSection msg="You did it!" username="Kent" />
      <HealthyEatingTips />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped></style>
