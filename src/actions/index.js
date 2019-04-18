// Step 3
//  Action creators are responsible for making API request.

import jsonPlaceholder from '../apis/jsonPlaceholder';

// Step 4
//  Create async action creator.
//  This action creator takes some amount of time for it to get its data
//  ready to go. We will use middleware!!!
export const fetchPosts = () =>
    // Let's use redux-thunk awesomeness and return a function instead of plain
    // javascript object.
    // Thanks to redux-thunk we aren't obligated to only return an object... we
    // can return functions too.
    //
    // Through dispatch we can change any data we want
    // Through getState we can read or access any data we want
    async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        // Needed by thunk.
        dispatch({type: 'FETCH_POSTS', payload: response});
    };