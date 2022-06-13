import React, {useState} from 'react';

export const OnOff = () => {

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


    return (
        <div style={box}>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
