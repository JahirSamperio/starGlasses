export const setItem = (key, item) => {
  try {
    console.log(key);
    console.log(item);
    localStorage.setItem(key, item);
  } catch (error) {
    return error;
  }
};
