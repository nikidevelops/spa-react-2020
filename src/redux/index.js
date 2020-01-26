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

export default combineReducers({ counter, movies });