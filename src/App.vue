<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WelcomeSection from './components/WelcomeSection.vue'
import Donations from './components/Donations.vue'
import HealthyEatingTips from './components/HealthyEatingTips.vue'
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import HomeView from './views/HomeView.vue'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <HeaderSection />
  <HeroSection />
  <div class="container">
    <div class="row">
      <div class="col-9 main-content">
        <HomeView />
      </div>
      <div class="col-3 sidebar">
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
