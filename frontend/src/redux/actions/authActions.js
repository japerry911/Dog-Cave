import phoenixServer from "../../api/phoenixServer";

export const loadingStart = () => {
  return {
    type: "LOADING_START",
  };
};

export const success = (payload) => {
  return {
    type: "SUCCESS",
    payload,
  };
};

export const failed = (error) => {
  return {
    type: "FAILED",
    error,
  };
};

export const signIn = (username, password) => {
  return (dispatch) => {
    dispatch(loadingStart());

    const formData = new FormData();

    formData.set("username", username);
    formData.set("password", password);

    return phoenixServer.post("/api/sessions/sign-in", formData).then(
      (response) => {
        dispatch(
          success({
            token: response.data.token,
            user: response.data.user,
            isAuthed: true,
          })
        );
        return true;
      },
      (error) => {
        dispatch(failed({ error }));
        return false;
      }
    );
  };
};

export const getUser = (id, token) => {
  return (dispatch) => {
    dispatch(loadingStart());

    return phoenixServer
      .get(`/api/authed/users/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          dispatch(success({ user: response.data.data }));
          return true;
        },
        (error) => {
          dispatch(failed(error));
          return false;
        }
      );
  };
};

export const signOut = (id) => {
  return (dispatch) => {
    dispatch(loadingStart());

    return phoenixServer.delete(`/api/sessions/sign-out/${id}`).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  };
};
