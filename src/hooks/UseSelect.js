import React, {useState} from 'react';

const UseSelect = (initialState, options) => {

    const [state, setstate] = useState(initialState);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setstate(e.target.value) }
        >
            {options.map(op => (
                <option key={op.value} value={op.value}>{op.label}</option>
            ))}
        </select>
    )
    return [state, SelectNoticias];
}
 
export default UseSelect;