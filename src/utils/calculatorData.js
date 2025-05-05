
// Define the button layout
// Type: 'number', 'operator', 'special'
const buttons = [
  { label: 'AC', type: 'special' },// Row 1 (Disabled +/- and % for simplicity)
  { label: '+/-', type: 'special', disabled: true },
  { label: '%', type: 'special', disabled: true },
  { label: '/', type: 'operator' },
  { label: 7, type: 'number' },// Row 2
  { label: 8, type: 'number' },
  { label: 9, type: 'number' },
  { label: '*', type: 'operator' },
  { label: 4, type: 'number' },// Row 3
  { label: 5, type: 'number' },
  { label: 6, type: 'number' },
  { label: '-', type: 'operator' },
  { label: 1, type: 'number' },
  { label: 2, type: 'number' },
  { label: 3, type: 'number' },
  { label: '+', type: 'operator' },
  { label: 0, type: 'number', isWide: true }, // Row 5
  { label: '.', type: 'number' },
  { label: '=', type: 'special' }
];

const keyMap = {
  '0': { label: 0, type: 'number' }, '1': { label: 1, type: 'number' },
  '2': { label: 2, type: 'number' }, '3': { label: 3, type: 'number' },
  '4': { label: 4, type: 'number' }, '5': { label: 5, type: 'number' },
  '6': { label: 6, type: 'number' }, '7': { label: 7, type: 'number' },
  '8': { label: 8, type: 'number' }, '9': { label: 9, type: 'number' },
  '.': { label: '.', type: 'number' },
  '+': { label: '+', type: 'operator' }, '-': { label: '-', type: 'operator' },
  '*': { label: '*', type: 'operator' }, '/': { label: '/', type: 'operator' },
  'Enter': { label: '=', type: 'special' }, '=': { label: '=', type: 'special' },
  'Backspace': { label: 'AC', type: 'special' }, 'Delete': { label: 'AC', type: 'special' },
  'Escape': { label: 'AC', type: 'special' },
};

export {
  buttons,
  keyMap
}