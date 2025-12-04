<template>
  <div class="container">
    <div class="title">
      <h1>Guardião de Senhas</h1>
    </div>

    <PasswordInput @password-change="handlePasswordChange" />

    <StrengthBar :score="passwordScore" />

    <FeedbackPanel :feedback="feedbackList" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PasswordInput from './components/PasswordInput.vue'
import StrengthBar from './components/StrengthBar.vue'
import FeedbackPanel from './components/FeedbackPanel.vue'
import { analyzePassword } from './utils/passwordAnalyzer.js'

const passwordScore = ref(0)
const feedbackList = ref([])

function handlePasswordChange(password) {
  const result = analyzePassword(password)
  passwordScore.value = result.score
  feedbackList.value = result.feedback
}
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  font-family: sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
