import React, {useState} from 'react';


type OnOffPropsType = {
    on: boolean
    setOn: (on:boolean)=>void
}

const OnOffSecret = (props:OnOffPropsType) => {

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
        backgroundColor: props.on ? 'green' : 'white'
    }

    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        // textAlign: 'center',
        lineHeight: '50px',
        margin: '10px',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '30px',
        margin: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }


    return (
        <div style={box}>
            <div style={onStyle} onClick={() => {
                props.setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const OnOff = React.memo(OnOffSecret)
