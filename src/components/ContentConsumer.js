import React from 'react';
import AppContext from '../ApplicationContext';

export default class ContentConsumer extends React.Component {
    render() {
        return (
            <AppContext.ApplicationConsumer>
                {context => (
                    <>
                        <h2>{context.title}</h2>
                        <p>{context.counter}</p>
                        <button onClick={() => context.setTitle('asdasd')} className="btn btn-primary">Click</button>
                    </>
                )}
            </AppContext.ApplicationConsumer>
        )
    }
}