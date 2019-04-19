import React from 'react';
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions";
import UserHeader from './UserHeader';

class PostList extends React.Component {

    // Step 2
    //  Fetch data from the API by calling action creators.
    //  Components are generally responsible for fetching data they need by
    //  balling an action creator.
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }

}

// Step 7
//  Attach mapStatToProps function. This will connect our component with
//  the redux store.
const mapStateToProps = (state) => {
    return {posts: state.posts};
};

export default connect(
    mapStateToProps,
    {fetchPostsAndUsers}
)(PostList);