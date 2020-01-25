import React from 'react';
// import FunctionalComponent from '../components/FunctionalComponent';
import QuantityInput from '../components/QuantityInput';
import ListGroup from '../components/ListGroup';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: []
        }
        this.getQuantityInputs = this.getQuantityInputs.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleQuantityChange(value) {
        if (value <= 0) value = 0;
        const counts = new Array(value).fill(value);
        this.setState({
            counts
        });
    }
    getQuantityInputs() {
        const { counts } = this.state;
        return counts.map((item, i) => (
            <QuantityInput key={i} initialCount={item} />
        ));
    }
    render() {
        return (
            <>
                <h1>Home Page!</h1>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <QuantityInput initialCount={0} onChange={this.handleQuantityChange} />
                        <hr />
                        <ListGroup />
                    </div>
                    <div className="col">
                        {this.getQuantityInputs()}
                    </div>
                </div>

                {/* <FunctionalComponent count={1} step={2} title="Hi, Functional Component" description="Test description">
                    <div className="alert alert-primary">Test 1</div>
                </FunctionalComponent> */}
            </>

        )
    }
}
export default Home;