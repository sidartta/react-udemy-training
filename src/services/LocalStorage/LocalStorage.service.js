export const LocalStorageService = {
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  set(key, value) {
    const oldData = !!localStorage[key]
      ? JSON.parse(localStorage.getItem(key))
      : [];
    if (key === 'expenses') {
      const dataSubset = oldData.filter((elem) => elem.id !== value.id);
      localStorage.setItem(key, JSON.stringify([...dataSubset, value]));
    } else if (key === 'auth') {
      localStorage.setItem(key, JSON.stringify({ ...oldData, ...value }));
    }
  },
  delete(key, value) {
    const oldData = !!localStorage[key]
      ? JSON.parse(localStorage.getItem(key))
      : [];
    const dataSubset = oldData.filter((elem) => elem.id !== value.id);
    localStorage.setItem(key, JSON.stringify(dataSubset));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
