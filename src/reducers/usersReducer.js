// Prepare users reducer.
export default (state = [], action) => {
    if (action.type === 'FETCH_USER') {
        // Return new array... not mutate it!
        return [...state, action.payload];
    }

    return state;
};