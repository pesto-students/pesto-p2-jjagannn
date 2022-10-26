function StepCounter(props){
    const { counter, dispatch } = props;

    const handleIncrement = () => {
        dispatch(increase(counter));
    }
    function increase(){
        return {
            type: "INCREASE_COUNT",
            counter: counter
        };
    }
    const handleDecrement = () => {
        dispatch(decrease(counter));
    }
    function decrease(){
        return {
            type: "DECREASE_COUNT",
            counter: counter
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