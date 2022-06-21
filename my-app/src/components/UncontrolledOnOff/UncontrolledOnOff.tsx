import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false);

    const box = {
        display: 'flex'
    }

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        // textAlign: 'center',
        lineHeight: '50px',
        margin: '10px',
        backgroundColor: on ? 'green' : 'white'
    }

    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        // textAlign: 'center',
        lineHeight: '50px',
        margin: '10px',
        backgroundColor: on ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '30px',
        margin: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div style={box}>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={offStyle} onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
