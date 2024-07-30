<script setup>
function donatePlease() {
  alert('Thank you for donating!')
  console.log('Donation successful!')
}
</script>

<template>
  <div class="donate">
    <h1>Donations</h1>
    <p>
      HELP US HELP YOU!
      <br />
      Thank you for considering to donate to our cause of helping food-poor programmers. We are a
      non-profit organization and we rely on donations to keep our services running.
    </p>
    <p>Click the button below to donate.</p>
    <button class="btn" @click="donatePlease">Donate</button>
  </div>
</template>

<style scoped>
.btn {
  background-color: var(--color-primary);
  color: green;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-top: 10px;
}

.donate {
  text-align: center;
  margin-top: 20px;
}
</style>
