<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import CalculatorDisplay from './components/CalculatorDisplay.vue';
import CalculatorKeypad from './components/CalculatorKeypad.vue';
import { useCalculatorStore } from './stores/calculator'; // Import the store
import { keyMap } from './utils/calculatorData';

// --- Lifecycle Hooks ---
onMounted(() => {
  console.log('App component mounted!');
  // Good place for initial setup, like fetching data or adding listeners
  window.addEventListener('keydown', handleKeyPress);
});

onBeforeUnmount(() => {
  console.log('App component will unmount!');
  // Good place for cleanup, like removing listeners
  window.removeEventListener('keydown', handleKeyPress);
});

// Get the store instance
const calculatorStore = useCalculatorStore();

// Handler for keypad events
const handleKeypadPress = (payload) => {
  console.log('App received key press:', payload);
  const { label, type } = payload;

  if (type === 'number') {
    calculatorStore.handleNumber(label);
  } else if (type === 'operator') {
    calculatorStore.handleOperator(label);
  } else if (type === 'special') {
    calculatorStore.handleSpecial(label); // Pass the label (e.g., 'AC', '=')
  }
}

// --- Bonus: Keyboard Support ---
const handleKeyPress = (event) => {
  console.log('Keyboard event:', event.key);
  const key = event.key;

  if (keyMap[key]) {
    handleKeypadPress(keyMap[key]);
  }
}
</script>

<template>
  <div class="calculator-container">
    <h1>Vue Calculator</h1>
    <!-- Bind the displayValue from the store to the 'value' prop of CalculatorDisplay -->
    <CalculatorDisplay :value="calculatorStore.displayValue" />
    <!-- Listen for the 'key-press' event from CalculatorKeypad -->
    <CalculatorKeypad @key-press="handleKeypadPress" />
  </div>
</template>

<style>
/* Add some global styles or styles for the App component container */
#app {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  background-color: #e9e9e9;
}

.calculator-container {
  width: 100%;
  max-width: 400px;
  /* Limit calculator width */
  ;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
</style>