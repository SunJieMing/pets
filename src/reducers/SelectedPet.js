export default (state = {}, action) => {
  switch (action.type) {
    case ('SELECT_PET'):
      return action.payload;
    default:
      return state;
  }
};
