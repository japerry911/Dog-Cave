const INITIAL_STATE = {
  user: {},
  isAuthed: false,
  isLoading: false,
  error: null,
  token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, isLoading: true };

    case "FAILED":
      return { ...state, isLoading: false, ...action.error };

    case "SUCCESS":
      return { ...state, isLoading: false, ...action.payload };

    default:
      return state;
  }
};

export default authReducer;
