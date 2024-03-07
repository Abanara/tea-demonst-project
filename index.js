// Helper function to calculate the square of a number
function square(x) {
    return x * x;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to find the maximum number in an array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Example usage of the helper functions
  console.log(square(5)); // Output: 25
  console.log(isEven(6)); // Output: true
  console.log(findMax([2, 8, 3, 10, 5])); // Output: 10
  