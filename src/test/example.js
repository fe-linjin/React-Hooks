import React, { useState, useEffect, useReducer } from 'react';
import actions from '../action';
import reducer from '../reducer/example';

export default function Example() {

    const [reduxState, dispatch] = useReducer(reducer, {count: 0});

    useEffect(() => {
        window.document.title = `you click ${reduxState.count} times`;
    }, [reduxState.count]);
    return (
        <div>
            <p>you can click it</p>
            <button onClick={() => dispatch(actions.onChangeCount(reduxState.count))}>click it</button>
        </div>
    )
}




/*
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