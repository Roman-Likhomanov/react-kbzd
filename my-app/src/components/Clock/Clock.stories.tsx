import React from 'react';
import {Clock} from './Clock';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}