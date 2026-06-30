// server/src/utils/numerology.js

// Digital Root Calculation
export const getSingleDigit = (number) => {
  if (number === 0) return 0;
  return number % 9 === 0 ? 9 : number % 9;
};

// Mulank: Safe extraction via split to avoid timezone offsets
export const calculateMulank = (dob) => {
  const dateParts = dob.split('-'); // ['YYYY', 'MM', 'DD']
  const dayOfBirth = parseInt(dateParts[2], 10);
  return getSingleDigit(dayOfBirth);
};

// Bhagyank: Destiny Number from full DOB string
export const calculateBhagyank = (dob) => {
  const dateString = dob.replace(/-/g, ''); 
  let dateSum = 0;
  for (let char of dateString) {
    dateSum += parseInt(char, 10);
  }
  return getSingleDigit(dateSum);
};