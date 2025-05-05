import { defineStore } from 'pinia'
import { ref, computed } from 'vue' // reactive state

export const useCalculatorStore = defineStore('calculator', () => {
  // --- State ---
  const currentInput = ref('0') // What's currently shown on the display
  const previousInput = ref(null) // The first operand
  const operator = ref(null)      // The selected operator (+, -, *, /)
  const operatorClicked = ref(false) // Flag to know if an operator was just clicked

  // --- Getters --- (Optional, but good practice for derived state)
  const displayValue = computed(() => currentInput.value)

  // --- Actions ---
  const clear = () => {
    currentInput.value = '0'
    previousInput.value = null
    operator.value = null
    operatorClicked.value = false
  }

  const handleNumber = (number) => {
    if (currentInput.value === '0' || operatorClicked.value) {
      currentInput.value = String(number)
      operatorClicked.value = false
    } else {
      // Prevent multiple decimals
      if (number === '.' && currentInput.value.includes('.')) return
      currentInput.value += String(number)
    }
  }

  const handleOperator = (op) => {
    // Handle consecutive operators (use the last one)
    if (operator.value && operatorClicked.value) {
      operator.value = op;
      return;
    }

    // If there's already a previous input, calculate first
    if (previousInput.value !== null && !operatorClicked.value) {
      calculateResult();
    }

    // Store current state for next calculation
    previousInput.value = currentInput.value
    operator.value = op
    operatorClicked.value = true
  }

  const calculateResult = () => {
    console.log('Action: calculateResult');
    if (!operator.value || previousInput.value === null) {
      return // Need an operator and a previous value
    }

    const prev = parseFloat(previousInput.value)
    const current = parseFloat(currentInput.value)
    let result = 0;

    switch (operator.value) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '*': result = prev * current; break;
      case '/':
        if (current === 0) {
          alert("Cannot divide by zero!"); // Simple error handling
          clear();
          return;
        }
        result = prev / current;
        break;
      default: return;
    }

    currentInput.value = String(result)
    previousInput.value = null // Ready for new calculation chain
    operator.value = null
    operatorClicked.value = false // Allow typing new number
  }

  const handleSpecial = (type) => {
    console.log('Action: handleSpecial', type);
    if (type === 'AC') {
      clear();
    } else if (type === '=') {
      calculateResult();
    }
    // Add other special functions like +/- or % here if desired
  }

  // Expose state, getters, and actions
  return {
    // State values
    currentInput,
    previousInput,
    operator,
    operatorClicked,
    displayValue,
    // Expose the getter
    clear,
    handleNumber,
    handleOperator,
    calculateResult,
    handleSpecial
  }
})