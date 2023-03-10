import { useState } from "react";

const Usestate = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div>
            <h1>{item}</h1>
            <button onClick={incrementItem}>Increase</button>
            <button onClick={decrementItem}>Decrease</button>
            <hr />
        </div>
    );
};
export default Usestate;
