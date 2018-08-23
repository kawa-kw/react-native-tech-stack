import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // this is our application state, so to get this libraries we do state.libraries
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})
