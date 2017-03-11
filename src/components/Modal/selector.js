export const getModalStatus = (state) => {
  const { modal: {
    open = null
  }} = state;
  return open;
};

export const getModalConfig = (state) => {
  const {modal: {
    config = null
  }} = state;
  return config;
};