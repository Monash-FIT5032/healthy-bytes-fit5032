<script setup>
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
import { defineEmits } from 'vue'

/**
 * The router instance used for redirecting the user to the home page.
 */
const router = useRouter()
const toast = useToast()

/**
 * Emits an event to the parent component to indicate that the user has been authenticated.
 */
const emit = defineEmits(['authenticated'])

/**
 * Shows an error toast message.
 */
const showError = () => {
  toast.add({
    severity: 'error',
    summary: 'Incorrect username/password. Check the hint!',
    detail: 'Try again pls.',
    life: 3000
  })
}

/**
 * Our username and password for this demo.
 */
const globalUsername = 'admin@gmail.com'
const globalPassword = 'password'

/**
 * Handles the form submission.
 * @param {Event} event The form submission event.
 * If the username and password are correct, the user is authenticated and redirected to the home page.
 */
const handleSubmit = (event) => {
  event.preventDefault()
  const email = event.target.email.value
  const password = event.target.password.value

  if (email === globalUsername && password === globalPassword) {
    console.log('Login successful')
    emit('authenticated', true)
    router.push('/')
  } else {
    console.log('Login failed')
    showError()
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box text-center">
      <img src="@/assets/logo.svg" alt="Bootstrap Logo" class="logo" width="72" height="57" />
      <h2 class="mb-4">Sign In</h2>
      <p class="hint">Hint: The username is 'admin@gmail.com' and the password is 'password'.</p>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <div class="mb-3 form-check text-start">
          <input type="checkbox" class="form-check-input" id="rememberMe" />
          <label class="form-check-label" for="rememberMe">Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign In</button>
      </form>
      <div class="mt-3">
        <a href="#" class="link-secondary">Forgot my password</a> |
        <a href="#" class="link-secondary">Create an account</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  max-width: 360px;
  margin: auto;
  padding: 15px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  display: block;
  margin: 0 auto 20px;
}
</style>
