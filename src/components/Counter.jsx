//created only for a study case in the middle of the project
import {useState} from 'react';

export function Counter() {
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button
                type="button"
                onClick={increment}
            >Increment
            </button>
        </div>
    );
}