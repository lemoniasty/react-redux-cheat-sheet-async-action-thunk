import React from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends React.Component {

    // Step 2
    //  Fetch data from the API by calling action creators.
    //  Components are generally responsible for fetching data they need by
    //  balling an action creator.
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post list</div>;
    }

}

export default connect(
    null,
    {fetchPosts}
)(PostList);