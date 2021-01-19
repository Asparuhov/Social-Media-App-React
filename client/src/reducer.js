let initialState = {
  user: {},
  isAuth: false,
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETCURRENTUSER":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case "ADDPOST":
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
