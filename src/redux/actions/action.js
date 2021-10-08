export const darkMode = (payload) => {
  console.log({ payload });
  return {
    type: "DARK",
    payload: payload,
  };
};
