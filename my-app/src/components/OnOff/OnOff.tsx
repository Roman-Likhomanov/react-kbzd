import React from 'react';
import s from './OnOff.module.css';

export const OnOff = () => {
    return (
        <div>
            <LightOnOff selected={true}/>
        </div>
    )
}

type LightPropsType = {
    selected: boolean
}

function LightOnOff(props: LightPropsType) {
return(
   <div>
       <LightOff/>
       {props.selected && <LightOn/>}
   </div>
)
}

const LightOn = () => {
    return <div className={s.boxOnOff}>
        <div className={s.onGreen}>On</div>
        <div className={s.off}>Off</div>
        <div className={s.circleGreen}></div>
    </div>
}

const LightOff = () => {
    return <div className={s.boxOnOff}>
        <div className={s.on}>On</div>
        <div className={s.offRed}>Off</div>
        <div className={s.circleRed}></div>
    </div>
}