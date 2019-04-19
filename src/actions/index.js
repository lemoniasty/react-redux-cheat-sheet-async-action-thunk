// Step 3
//  Action creators are responsible for making API request.
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Step TODO
//  By using this multipurpose action creator, we can solve the problem of over
//  fetching data through network requests.
//  TODO
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // Make sure that we dispatch that action creator and this inner function
    // eventually gets called, the await keyword right here is going to
    // essentially make sure that we wait for this API request to be completed
    // before we move on to do anything else inside of our new action creator
    // right here.
    await dispatch(fetchPosts());

    // getState().posts is a state with the posts received by dispatched
    // fetchPosts() action creator (one line above). This state will be
    // prepared by the action creator and we can use it after fetchPost()
    // method will finish his work.
    // So let's fetch unique user ids from the posts array.
    const userIds = _.uniq(_.map(getState().posts, "userId"));

    // Fetch data about each user by invoking a single API call for a given
    // user ID.
    // There we don't have to wait for the users... so we skip await keyword.
    userIds.forEach(id => dispatch(fetchUser(id)));

    // A chained version of above lines of code.
    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value(); // Execute!
};

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
        dispatch({type: 'FETCH_POSTS', payload: response.data});
    };

// Fetch user action creator.
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};