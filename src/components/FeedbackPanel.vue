<template>
  <div class="panel">
    <h3>Recomendações:</h3>

    <ul>
      <li v-for="(msg, i) in feedback" :key="i">
        {{ msg }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  feedback: Array
})
</script>

<style scoped>
.panel {
  margin-top: 20px;
  padding: 15px;
  background: #f3f3f3;
  border-radius: 8px;
}
ul {
  padding-left: 20px;
}
</style>
