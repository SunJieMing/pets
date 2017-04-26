import { combineReducers } from 'redux';
import PetsReducer from './Pets';
import SelectedPetReducer from './SelectedPet';

const rootReducer = combineReducers({
  selectedPet: SelectedPetReducer,
  pets: PetsReducer,
});

export default rootReducer;
