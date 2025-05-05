# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).




# Summary of Concepts Learned:

### Project Setup 
Using Vite to scaffold a Vue project.

### Components
Breaking the UI into reusable parts (App, CalculatorDisplay, CalculatorKeypad, CalculatorButton).

### Props
 Passing data down from parent to child (App -> CalculatorDisplay, CalculatorKeypad -> CalculatorButton).

### Events ($emit)
 Sending messages up from child to parent (CalculatorButton -> CalculatorKeypad -> App).

### Global State Management (Pinia)
Creating a store (defineStore).
Defining reactive state (ref).
Defining actions (functions) to modify state.
Defining getters (computed) for derived state.
Using the store in components (useCalculatorStore).

### Lifecycle Hooks 
Understanding when components are created, mounted, updated, and destroyed (onMounted, onUpdated, onBeforeUnmount). We used them for logging and event listener management.

### Vue Reactivity
 How changes in Pinia state automatically update the components that use that state (e.g., the CalculatorDisplay).

### Template Syntax
 `{{ }}, v-bind (:), v-on (@), v-for`.

### Composition API 
 A modern way to organize component logic. `<script setup>`