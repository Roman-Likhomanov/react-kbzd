import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {

    let[collaps, setCollaps] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollaps(!collaps)}}/>

            {collaps && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return <h3 onClick={()=>props.onClick()}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;