let initialState = {
  user: {},
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETCURRENTUSER":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default reducer;
