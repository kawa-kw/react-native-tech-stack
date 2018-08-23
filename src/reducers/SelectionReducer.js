export default (state = null, action) => {
    // it cant be undefined.
    // We dont want to have any row selected at start, so we have to return null.
    // return null;
    //console.log(action)
    switch (action.type) {
        case 'select_library':
            return action.payload

        default:
            return state;
    }
};
