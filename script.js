function findFirstNonRepeatedCharacter(inputString) {
  const charFrequency = {};

  // Count the frequency of each character in the input string
  for (const char of inputString) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (const char of inputString) {
    if (charFrequency[char] === 1) {
      return alert(char);
    }
  }

  // If no non-repeated character is found, return null or a suitable value
  return null;
}

// Get the input string using the prompt() method
const inputString = prompt("Enter a string:");
const firstNonRepeatedCharacter = findFirstNonRepeatedCharacter(inputString);
