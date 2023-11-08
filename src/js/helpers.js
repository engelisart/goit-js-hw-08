export function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLs(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return data;
  }
}
