import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './Editor.scss'

const Editor = props => {
    const {date, onDate, mood, onMood} = props;
return (
    <div className="editor__wrapper">
    <section className="editor__container">
    <form className="editor__form">
        <fieldset className="editor__box">
            <label htmlFor="date">Date</label>
            <input 
            className="editor__text"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={onDate}
            />
        </fieldset>
        <fieldset className="editor__box">
            <label className="editor__title" htmlFor="mood_happy">:)</label>
            <input 
            className="editor__text-faces"
            type="radio"
            name="mood"
            id="mood_happy"
            value="happy"
            onChange={onMood}
            />
            <label className="editor__title" htmlFor="mood_sad">:(</label>
            <input 
            className="editor__text-faces"
            type="radio"
            name="mood"
            id="mood_sad"
            value="sad"
            onChange={onMood}/>
        </fieldset>
        <fieldset className="editor__box">
            <label htmlFor="message">Message</label>
            <input 
            className="editor__text"
            type="text"
            name="message"
            id="message"
            value="Why is it a good day?"
            />
        </fieldset>
        <button>GUARDAR</button>

        <button>Cancelar</button>
    </form>
    </section>
    </div>
)}

export default Editor;