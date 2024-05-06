export const getItem = async (key) => {
  const item = localStorage.getItem(key);

  if (item) return item;

  return null;
};
