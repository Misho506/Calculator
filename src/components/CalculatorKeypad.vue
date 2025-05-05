<script setup>
import CalculatorButton from './CalculatorButton.vue';
import { defineEmits } from 'vue';
import { buttons } from '../utils/calculatorData';

const emit = defineEmits(['key-press']);


const handleButtonClick = (payload) => {
  // Re-emit the event from CalculatorButton upwards
  // Can also be named differently if needed, e.g., 'keypad-event'
  console.log('Keypad received button click:', payload);
  emit('key-press', payload);
}
</script>

<template>
  <div class="calculator-keypad">
    <!-- :key="..." is shorthand for v-bind:key="..." -->
    <!-- @click="..." is shorthand for v-on:click="..." -->
    <CalculatorButton
      v-for="button in buttons"
      :key="button.label"
      v-bind:label="button.label" 
      :type="button.type"
      :is-wide="button.isWide"
      :disabled="button.disabled"
      @button-click="handleButtonClick"
    />
  </div>
</template>

<style scoped>
.calculator-keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  gap: 10px; /* Spacing between buttons */
}
</style>