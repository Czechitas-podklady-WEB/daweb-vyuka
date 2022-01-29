const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};
