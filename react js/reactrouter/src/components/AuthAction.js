import React from "react";

export function signupAction(email, password, history) {
  return (dispatch) => {
    signUp(email, password)
      .then((response) => {
        saveTokenInLocalStorage(response.data);
        dispatch(confirmedSignupAction(response.data));
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = formatError(error, response.data);
        dispatch(signupFailedAction(errorMessage));
      });
  };
}
