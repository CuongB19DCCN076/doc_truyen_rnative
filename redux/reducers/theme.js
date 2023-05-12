const init = {
    theme: "white"
}
export const reTheme = (state = init, action) => {
    switch (action.type) {
        case "setTheme":
          return {...state, theme: action.payload};
        default:
          return state;
      }
  };
  export default reTheme;