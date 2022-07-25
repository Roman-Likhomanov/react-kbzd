import React, {useMemo, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './../components/Select/Select'

export default {
    title: 'Select',
    component: Select
}

export const CityM = () => {

    const [value, setValue] = useState('2')
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState([
        {value: '1', title: 'Minsk', countryId: 'Belarus', populationCity: 2},
        {value: '2', title: 'Moscow', countryId: 'Russia', populationCity: 12},
        {value: '3', title: 'Kiev', countryId: 'Ukraine', populationCity: 3},
    ])

    const newArray = useMemo(() => {

        const newArray = cities.filter(s => s.title.toLowerCase().indexOf('m') > -1)
        return newArray
    }, [cities])

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {counter}
        <Select onChange={setValue}
                value={value}
                items={newArray}
        />
    </>
}

export const CitiesByRussia = () => {

    const [value, setValue] = useState('2')
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState([
        {value: '1', title: 'Minsk', countryId: 'Belarus', populationCity: 2},
        {value: '2', title: 'Moscow', countryId: 'Russia', populationCity: 12},
        {value: '3', title: 'Kiev', countryId: 'Ukraine', populationCity: 3},
    ])

    const newArray = useMemo(() => {

        const newArray = cities.filter(s => s.countryId === 'Russia')
        return newArray
    }, [cities])

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {counter}
        <Select onChange={setValue}
                value={value}
                items={newArray}
        />
    </>
}

export const CitiesBy10mln = () => {

    const [value, setValue] = useState('2')
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState([
        {value: '1', title: 'Minsk', countryId: 'Belarus', populationCity: 2},
        {value: '2', title: 'Moscow', countryId: 'Russia', populationCity: 12},
        {value: '3', title: 'Kiev', countryId: 'Ukraine', populationCity: 3},
    ])

    const newArray = useMemo(() => {

        const newArray = cities.filter(s => s.populationCity > 10)
        return newArray
    }, [cities])

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {counter}
        <Select onChange={setValue}
                value={value}
                items={newArray}
        />
    </>
}


