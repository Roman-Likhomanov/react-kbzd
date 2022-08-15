import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo',
}

function generateData() {
    return 1 // сложные вычисления
}

export const Example = () => {

const [counter, setCounter] = useState(generateData)

const changer = (state: number) => {
    return state + 1
}

    return <>
<button onClick={() => setCounter(changer)}>+</button>
    </>
}




