import React from 'react';
import { connect } from 'react-redux';


class Profile extends React.Component {
    render() {
        return (
            <>
                <h1>Profile Page!</h1>
                <p>{this.props.counter}</p>
            </>
        )
    }
}
const mapStateToProps = ({ counter }) => ({
    counter
})
export default connect(mapStateToProps)(Profile);