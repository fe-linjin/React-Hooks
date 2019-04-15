import React, { useState, useEffect, useReducer, useContext } from 'react';

import actions from '../action';
import { ExampleContext } from '../App';

const Example = () => {

    const exampleContext = useContext(ExampleContext);

    useEffect(() => {
        window.document.title = `you click ${exampleContext.exampleState.count} times`;
    }, [exampleContext.exampleState.count]);

    return (
        <div>
            <p>you can click it</p>
            <button onClick={() => exampleContext.dispatch(actions.onChangeCount(exampleContext.exampleState.count))}>click it</button>
        </div>
    )
}

export default Example;


/* s
class Example extends Component{


componentDidMount() {
    window.document.title = `点击了${this.props.count}次`;
}

componentWillUpdate() {
    window.document.title = `点击了${this.props.count}次`;
}


render() {
    const { count } = this.props;
    return (
        <div>
            <p>you can click it to change value</p>
            <button onClick={() => this.props.onChangeCount(count)}>Click me</button>
        </div>
    )
}
}

const mapStateToProps = state => ({
// example: state.example
count: state.example.count
})

const mapDispatchToProps = dispatch => ({
onChangeCount(count) {
    dispatch(actions.onChangeCount(count));
}
})

export default connect(mapStateToProps, mapDispatchToProps)(Example);

*/