// Select elements
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize count
let count = 0;

// Update the counter display
function updateCounter() {
  counter.textContent = count;
}

// Increment button functionality
incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrement button functionality
decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});