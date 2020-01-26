import { combineReducers } from 'redux';

const counter = function (count = 1, action) {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return count + action.payload;
        default:
            return count;
    }
}

const movies = function (movies = [], action) {
    switch (action.type) {
        case "FETCHED_MOVIES":
            return [...action.payload];
        default:
            return movies;
    }
}

const testTitle = function (title = '', action) {
    switch (action.type) {
        case "SET_TEST_TITLE":
            return action.payload;
        default:
            return title;
    }
}


export default combineReducers({ counter, movies, testTitle });