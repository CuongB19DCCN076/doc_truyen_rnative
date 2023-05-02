const init = {
    idTruyen: 1,
    idChap: undefined,
}
export const testRe = (state = init, action) => {
    switch (action.type) {
        case "setTruyen":
          return {...state, idTruyen: action.payload};
        case "setChap":
          return {...state, idChap: action.payload};
        default:
          return state;
      }
  };
  export default testRe;