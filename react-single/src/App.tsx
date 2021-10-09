import React, { useState } from 'react';

const App = ({ name }) => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>{ name }</h1>
            <h3>Counter: { counter }</h3>

            <button onClick={ () => setCounter(counter -1) }>
                Decrement
            </button>
            <button onClick={ () => setCounter(counter +1) }>
                Increment
            </button>
        </>
    );
};

export default App;