import React, { useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';

const LearnHooks =() => {
    const [count, setCount] = useState (0);

    useEffect(() => {
        console.log (count);
    },[count]);

    return (
        <div>
            <button onClick={() => setCount((Prev) => Prev +1 )}>Add count</button>
        </div>
    );
};

export default LearnHooks