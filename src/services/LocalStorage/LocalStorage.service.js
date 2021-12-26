export const LocalStorageService = {
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  set(key, value) {
    const oldData = !!localStorage[key]
      ? JSON.parse(localStorage.getItem(key))
      : [];
    const newData = oldData.filter((elem) => elem.id !== value.id);
    localStorage.setItem(key, JSON.stringify([...newData, value]));
  },
  delete(key, value) {
    const oldData = !!localStorage[key]
      ? JSON.parse(localStorage.getItem(key))
      : [];
    const newData = oldData.filter((elem) => elem.id !== value.id);
    localStorage.setItem(key, JSON.stringify(newData));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
