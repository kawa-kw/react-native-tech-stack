export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
};

// action is how we couse our reducer to update the data that they produce
