// EXAMPLE 1 - Format a Number as a Percentage in JavaScript

function formatAsPercentage(num) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num / 100);
}

console.log(formatAsPercentage(35.3)); // 👉️ "35.30%"
console.log(formatAsPercentage(100)); // 👉️ "100.00%"
console.log(formatAsPercentage(25.5)); // 👉️ "25.50%"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Format a Number as a Percentage using `toFixed()`

// function formatAsPercent(num) {
//   return `${parseFloat(num).toFixed(2)}%`;
// }

// console.log(formatAsPercent(25.49)); // 👉️ 25.49%
// console.log(formatAsPercent(25.5)); // 👉️ 25.50%
// console.log(formatAsPercent(25)); // 👉️ 25.00%
