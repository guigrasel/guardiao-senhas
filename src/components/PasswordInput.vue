<template>
  <div>
    <label>Digite sua senha:</label>
    <div style="display:flex; gap:8px; align-items:center; margin-top:5px;">
      <input 
        :type="show ? 'text' : 'password'"
        v-model="pwd"
        @input="emitUpdate"
        placeholder="Digite aqui..."
        style="flex:1; padding:10px; font-size:16px;"
      />
      <button type="button" @click="toggleShow" :aria-pressed="show" style="padding:8px 10px; font-size:14px;">
        {{ show ? 'Ocultar' : 'Mostrar' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pwd = ref('')
const show = ref(false)
const emit = defineEmits(['password-change'])

function emitUpdate() {
  emit('password-change', pwd.value)
}

function toggleShow() {
  show.value = !show.value
  // opcional: emitir o valor atual quando alterna a visibilidade
  emitUpdate()
}
</script>

<style scoped>
/* Mantive o estilo inline para o layout, mas você pode mover para aqui */
</style>
