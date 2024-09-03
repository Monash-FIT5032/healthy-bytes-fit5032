<script setup>
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
import { defineEmits, onMounted } from 'vue'
import { ref } from 'vue'

/**
 * Firebase imports
 * Import the functions you need from the Firebase SDKs you need
 */
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
const auth = getAuth()
if (import.meta.env.MODE === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099')
  console.log('Auth emulator connected')
} else {
  console.log(import.meta.env.MODE)
  console.log('Auth emulator not connected')
}
const userEmail = ref('')
const userPassword = ref('')

/**
 * The router instance used for redirecting the user to the home page.
 */
const router = useRouter()
const toast = useToast()

const isLoginMode = ref(false)

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
 * Shows an error toast message.
 */
const showMyError = (msg) => {
  toast.add({
    severity: 'error',
    summary: msg,
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

  if (isLoginMode.value) {
    // Login box is visible
    firebaseLoginuser(event)
  } else {
    // Register box is visible
    firebaseRegisteruser(event)
  }
}

const toggleLoginMode = () => {
  isLoginMode.value = !isLoginMode.value
}

const firebaseLoginuser = (event) => {
  event.preventDefault()
  userEmail.value = event.target.email.value
  userPassword.value = event.target.password.value
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('User login success:', user)

      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('userEmail', userEmail.value)

      emit('authenticated', true)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      showMyError(errorMessage)
      console.log(userEmail.value, userPassword.value)
    })
}

const firebaseRegisteruser = (event) => {
  event.preventDefault()
  userEmail.value = event.target.email.value
  userPassword.value = event.target.password.value
  createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('User registration success:', user)

      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('userEmail', userEmail.value)

      emit('authenticated', true)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      console.log(userEmail.value, userPassword.value)
    })
}

onMounted(() => {
  if (localStorage.getItem('isLoggedIn')) {
    emit('authenticated', true)
  }
})
</script>

<template>
  <div class="login-container">
    <div class="login-box text-center">
      <img src="@/assets/logo.svg" alt="Bootstrap Logo" class="logo" width="72" height="57" />
      <h2 class="mb-4" v-if="isLoginMode">Sign In</h2>
      <h2 class="mb-4" v-else>Register</h2>
      <p class="hint" v-if="isLoginMode">
        Hint: The username is 'admin@gmail.com' and the password is 'password'.
      </p>
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
        <div class="mb-3 form-check text-start" v-if="isLoginMode">
          <input type="checkbox" class="form-check-input" id="rememberMe" />
          <label class="form-check-label" for="rememberMe">Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary w-100" v-if="isLoginMode">
          Resume my adventure (Sign in)
        </button>
        <button type="submit" class="btn btn-primary w-100" v-else>
          I'm ready for a new adventure!
        </button>
      </form>
      <div class="mt-3" v-if="isLoginMode">
        <a href="#" class="link-secondary">Forgot my password</a> |
        <a href="#" class="link-secondary" @click="toggleLoginMode">Create an account</a>
      </div>
      <div class="mt-3" v-else>
        <a href="#" class="link-secondary" @click="toggleLoginMode">Back to Login</a>
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
