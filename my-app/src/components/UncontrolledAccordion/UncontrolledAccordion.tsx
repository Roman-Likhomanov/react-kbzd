import React, {useReducer, useState} from 'react';
import {reducer} from './reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordionSecret(props: UncontrolledAccordionPropsType) {

    // let[collaps, setCollaps] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollaps(!collaps)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

export default UncontrolledAccordion;