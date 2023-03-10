import { useState } from "react";

const Useinput = () => {
    const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) => {
            console.log(event.target);
            const {
                target: { value },
            } = event;
            let willUpdate = true;
            if (typeof validator === "function") {
                willUpdate = validator(value);
            }
            if (willUpdate) {
                setValue(value);
            }
        };
        return { value, onChange };
    };

    const maxLen = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
            <hr />
        </div>
    );
};
export default Useinput;
