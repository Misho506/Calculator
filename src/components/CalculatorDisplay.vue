<script setup>
import { defineProps, onUpdated } from 'vue';

// Props of CalculatorDisplay component
const props = defineProps({
  value: { // 'value' is the name of the prop
    type: String,
    required: true,
    default: '0' // the value of the prop
  }
});

// This hook runs after the component's DOM has been updated due to reactive state changes.
onUpdated(() => {
  console.log('CalculatorDisplay updated! New value:', props.value);
});

</script>

<template>
  <div class="calculator-display">
    {{ value }}
  </div>
</template>

<style lang="css" scoped>
.calculator-display {
  background-color: #333;
  color: white;
  font-size: 2.5em;
  padding: 15px 20px;
  text-align: right;
  border-radius: 5px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>