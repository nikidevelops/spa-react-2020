import React, { useState, useEffect } from 'react';

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(props.count);
    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmounted');
        }
    }, [count]);
    console.log('render');
    return (
        <div className="mb-5">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + props.step)} className="btn btn-success mr-2">+</button>
            <button onClick={() => setCount(count - props.step)} className="btn btn-success mr-2">-</button>
        </div>
    );
}
export default FunctionalComponent;

