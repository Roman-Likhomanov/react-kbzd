import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false);

    return (
        <div className='app'>
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            {/*Artical 2*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={()=>setAccordionCollapsed(!accordionCollapsed)}/>

            <OnOff on={on} setOn={setOn}/>
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<OnOff/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return <div><h1>{props.title}</h1></div>
}

export default App;