import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
}

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter {counter}
    </>
}

export const SetIntervalExampleClock = () => {

    const [counter, setCounter] = useState<Date>()

    useEffect(() => {
        setInterval(() => {
            setCounter(new Date)
        }, 1000)
    }, [])

    const stringTime = counter ? counter.toLocaleTimeString() : <br/>

    return <>
        Timer {stringTime}
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component render with' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

