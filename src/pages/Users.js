import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';


class Users extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.movies);
    }
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        const { movies } = this.props;
        return (
            <>
                <h1>Users Page!</h1>
                <hr />
                <ListGroup>
                    {movies.map(({ id, title }) => {
                        return (<ListGroupItem key={id}>{title}</ListGroupItem>)
                    })}
                </ListGroup>
            </>
        )
    }
}
const getGlobalMovies = dispatch => {
    fetch('https://facebook.github.io/react-native/movies.json')
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: 'FETCHED_MOVIES',
                payload: responseJson.movies
            });
        })
        .catch((error) => {
            console.error(error);
        });
}
const mapStateToProps = ({ movies }) => ({
    movies
});
const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getGlobalMovies)
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);