import React, { useState, useEffect } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

const ListGroupComponent = props => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        let response = await fetch(
            'https://facebook.github.io/react-native/movies.json',
        );
        let responseJson = await response.json();
        if (responseJson && responseJson.movies) {
            setMovies(responseJson.movies);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    if (!movies.length) return null;
    return (
        <ListGroup>
            {movies.map(({ id, title }) => {
                return (<ListGroupItem key={id}>{title}</ListGroupItem>)
            })}
        </ListGroup>
    );

}
export default ListGroupComponent;