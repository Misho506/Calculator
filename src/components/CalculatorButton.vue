<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {
    type: [String, Number],
    required: true
  },
  type: { // To distinguish between numbers, operators, special keys
    type: String,
    default: 'number' // 'number', 'operator', 'special'
  },
  isWide: { // Optional prop for wider buttons like '0' or '='
    type: Boolean,
    default: false
  }
});

// Define events this component can emit
const emit = defineEmits(['button-click']);

const handleClick = () => {
  // Emit an event named 'button-click' with the button's label and type
  emit('button-click', { label: props.label, type: props.type });
}
</script>

<template>
  <button @click="handleClick" :class="['calculator-button', `button-type-${type}`, { 'wide-button': isWide }]">
    {{ label }}
  </button>
</template>

<style scoped>
.calculator-button {
  font-size: 1.5em;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  min-width: 70px;
  /* Ensure minimum width */
  box-sizing: border-box;
  /* Include padding/border in width */

  &:hover {
    background-color: red;
  }

  &:active {
    background-color: #ddd;
  }
}

.button-type-operator {
  background-color: #f0ad4e;
  /* Orange for operators */
  color: white;
  
  &:active {
    background-color: #d58512;
  }
  
  &:hover {
    background-color: #ec971f;
  }
}


.button-type-special {
  background-color: #d9534f;
  /* Reddish for AC / = */
  color: white;
  &:hover {
    background-color: #c9302c;
  }

  &:active {
    background-color: #ac2925;
  }
}


.wide-button {
  grid-column: span 2;
  /* Make button span 2 columns in the grid */
}

.button-type-number {
  background-color: white;
  color: black;

  &:hover {
    background-color: #dddddd;
  }
}

</style>
