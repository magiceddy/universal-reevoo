export const getUsername = (state) => {
  const {name = ''} = state.user.data;
  return name;
};