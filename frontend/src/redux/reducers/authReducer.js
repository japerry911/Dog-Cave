const INITIAL_STATE = {
  user: {},
  isAuthed: false,
  isLoading: false,
  error: null,
  token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default authReducer;
