export const setMenuAction = (data) => (dispatch) => {
  dispatch({ type: "SET_MENU", value: data });
};

export const setIframe = (val) => (dispatch) => {
  dispatch({ type: "IFRAME", value: val });
};
