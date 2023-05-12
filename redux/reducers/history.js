const init = [{idHistoryTruyen: 1, idHistoryChap: 1}]
export const historyItem = (state = init, action) => {
    switch (action.type) {
        case "addHistory":
            if(state.findIndex((element) => element.idHistoryTruyen === action.payload.idHistoryTruyen) != -1){
                state.splice(state.findIndex((element) => element.idHistoryTruyen === action.payload.idHistoryTruyen), 1)
                return [...state, action.payload];
            } else {
                return [...state, action.payload];
            }
        default:
          return state;
      }
  };
  export default historyItem;