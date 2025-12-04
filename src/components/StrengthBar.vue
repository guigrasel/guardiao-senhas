<template>
  <div class="bar-container">
    <div 
      class="bar" 
      :style="{ width: score + '%', backgroundColor: barColor }">
    </div>
  </div>

  <p class="label">Força: {{ strengthName }}</p>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: Number
})

const strengthName = computed(() => {
  if (props.score < 25) return "Muito fraca"
  if (props.score < 50) return "Fraca"
  if (props.score < 75) return "Boa"
  return "Forte"
})

const barColor = computed(() => {
  if (props.score < 25) return "#ff4d4d"
  if (props.score < 50) return "#ff9900"
  if (props.score < 75) return "#0099ff"
  return "#00cc66"
})
</script>

<style scoped>
.bar-container {
  background: #ccc;
  width: 100%;
  height: 12px;
  border-radius: 8px;
  margin: 10px 0;
}

.bar {
  height: 100%;
  border-radius: 8px;
  transition: width 0.3s;
}

.label {
  font-size: 14px;
  margin: 4px 0;
}
</style>
