import React, {useState} from 'react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapseMode = () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={true} onChange={callback}
                                                    items={[{title:'Ivan', value:1},{title:'Viktor', value:1},{title:'Dimych', value:3},
                                                        {title:'Artur', value:4}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=>setValue(!value)} items={[{title:'Ivan', value:1},{title:'Viktor', value:1},{title:'Dimych', value:3},
        {title:'Artur', value:4}]} onClick={(value)=>{alert (`user with ID ${value} shoud be happy`)}}/>
}