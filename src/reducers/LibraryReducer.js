import data from './LibraryList.json';

// After app boots for the first time, this reducer runs once and creates state, which is an object {libraries: data}. Data is our json
export default () => data;
