import React from 'react';
import {connect} from "react-redux";

class UserHeader extends React.Component {

    render() {
        const {user} = this.props;

        // When we first render an element on the screen we know nothing about
        // the user, because we have default state of the application and we
        // are before API call. So in that case we want to prevent to showing
        // invalid data.
        if (!user) {
            return null;
        }

        // We have user. Show the data about him.
        return <div className="header">{user.name}</div>;
    }

}

// ownProps is a reference to the props passed to the component by props
// argument.
const mapStateToProps = (state, ownProps) => {
    // Idea here is that we can extract anything that is going to do some
    // computation on our state or redux states and props coming into our
    // component to the mapStatesToProps function.
    return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(
    mapStateToProps
)(UserHeader);