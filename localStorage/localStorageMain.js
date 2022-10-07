export function addInStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  // const posts = localStorage.getItem(key);
  const user = localStorage.getItem(key);

  if (!user) {
    return [];
  } else {
    return JSON.parse(user);
  }
}
