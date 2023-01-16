import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onIncrementByTen: () => dispatch({ type: 'INCREMENT_BY_10' }),
    onDecrementByTen: () => dispatch({ type: 'DECREMENT_BY_10' }),
    onReset: () => dispatch({ type: 'RESET' })
});

const CounterComponent = ({ counter, onIncrement, onDecrement, onIncrementByTen, onDecrementByTen, onReset }) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrementByTen}>Add 10</button>
        <button onClick={onDecrementByTen}>Remove 10</button>
        <button onClick={onReset}>Reset</button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);