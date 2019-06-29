import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

const Editor = props => {
    const {date, onDate, mood, onMood} = props;
return (
    <form>
        <fieldset>
            <label htmlFor="date">Date</label>
            <input 
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={onDate}
            />
        </fieldset>
        <fieldset>
            <label htmlFor="mood_happy">:)</label>
            <input 
            type="radio"
            name="mood"
            id="mood_happy"
            value="happy"
            onChange={onMood}
            />
            <label htmlFor="mood_sad">:(</label>
            <input type="radio"
            name="mood"
            id="mood_sad"
            value="sad"
            onChange={onMood}/>
        </fieldset>
        <fieldset>
            <label htmlFor="message">Message</label>
            <input 
            type="text"
            name="message"
            id="message"
            value="¿Por qué es un buen día"
            />
        </fieldset>
    </form>
)}

export default Editor;