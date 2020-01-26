import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setCount from '../redux/actions/counter'

function Profile(props) {
    const counter = useSelector(state => state.counter);
    const testTitle = useSelector(state => state.testTitle);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Profile Page!</h1>
            <h3>{testTitle}</h3>
            <p>{counter}</p>
            <button onClick={() => dispatch(setCount(20))} className="btn btn-primary">Global Count: {counter}</button>
        </>
    )
}
export default Profile;