import React, { useState, useEffect } from 'react';


const QuantityInput = ({ initialCount = 5, onChange = false }) => {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        if (onChange && typeof onChange === 'function') {
            onChange(count);
        }
    }, [count, onChange]);
    const getQuantityMessage = () => {
        const resultTemplate = {
            render: false,
            className: '',
            text: ''
        }
        if (count < 3) {
            resultTemplate.render = true;
            resultTemplate.className = 'danger';
            resultTemplate.text = 'Less than 3';
        }
        if (count > 7) {
            resultTemplate.render = true;
            resultTemplate.className = 'success';
            resultTemplate.text = 'Greater than 7';
        }
        if (resultTemplate.render) {
            return <div className={`alert alert-${resultTemplate.className}`}>{resultTemplate.text}</div>
        }
        return null;
    };
    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button
                        onClick={() => setCount(count - 1)}
                        className="btn btn-success"
                        type="button">
                        <i className="fa fa-minus"></i>
                    </button>
                </div>
                <input type="text"
                    onChange={e => setCount(+e.target.value)}
                    className={"form-control text-center bg-light"}
                    value={count}
                />
                <div className="input-group-append">
                    <button
                        onClick={() => setCount(count + 1)}

                        className="btn btn-success"
                        type="button">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
            {getQuantityMessage()}
        </>
    )
};
export default QuantityInput;