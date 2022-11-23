const initState = {
  menu: [],
  iframe: null,
};

export const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        menu: action.value,
      };
    case "IFRAME":
      return {
        ...state,
        iframe: action.value,
      };
    default:
      return state;
  }
};
