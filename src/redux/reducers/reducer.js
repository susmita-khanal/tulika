const initialState = {
  theme: "dark",
};
const changeTheme = (state = initialState, action) => {
  switch (action.type) {
    case "DARK":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export default changeTheme;
