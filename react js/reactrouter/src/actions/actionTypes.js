//This is Action Creator

export const sign_up = (email, password) => {
  return {
    type: "SIGN_UP",
    payload: {
      email: email,
      password: password,
    },
  };
};
export const login = () => {
  return {
    type: "LOGIN",
    payload: {
      isUser: "",
    },
  };
};
