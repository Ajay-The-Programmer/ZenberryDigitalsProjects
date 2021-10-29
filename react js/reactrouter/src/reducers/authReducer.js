//Reducer

const initialData = {
  dList: [],
};

const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SIGN_UP":
      const { email, password } = action.payload;

      return {
        ...state,
        dList: [
          ...state.dList,
          {
            email: email,
            password: password,
          },
        ],
      };
    case "LOGIN":
      return {
        ...state,
        dList: [
          {
            isUser: true,
            ...state.dList,
          },
        ],
      };

    default:
      return state;
  }
};

export default authReducer;
