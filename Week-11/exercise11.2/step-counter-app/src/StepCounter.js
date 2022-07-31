function StepCounter(props){
    const { counter, dispatch } = props;

    const handleIncrement = (counter) => {
        dispatch(increase(counter));
    }
    function increase(counter){
        return {
            type: "INCREASE_COUNT",
            count: counter
        };
    }
    const handleDecrement = () => {
        dispatch(decrease(counter));
    }
    function decrease(counter){
        return {
            type: "DECREASE_COUNT",
            count: counter
        };
    }

    return (
        <>
            <h2>Count is {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default StepCounter;