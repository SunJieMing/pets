export const selectPet = (pet) => {
  return {
    type: 'SELECT_PET',
    payload: pet,
  };
};
