export const setTruyen = (id) => {
  return { type: "setTruyen", payload: id };
};
export const setChap = (id) => {
  return { type: "setChap", payload: id };
};
export const setTheme = (theme) => {
  return { type: "setTheme", payload: theme };
};
export const addHistory = (item) => {
  return { type: "addHistory", payload: item };
};

