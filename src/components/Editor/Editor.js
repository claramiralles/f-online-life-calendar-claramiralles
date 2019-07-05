import React from 'react';
// import {Link} from 'react-router-dom'
import './Editor.scss'

class Editor extends React.Component {

    render() {
        const { happyMessage, form, handlerHappyFace } = this.props;

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
                    />
                </fieldset>
                <fieldset className="editor__box">
                    <label htmlFor="happy-face">:)</label>
                    <input 
                    className="editor__text-faces"
                    type="radio"
                    name="face"
                    id="happy-face"
                    value=":)"
                    checked={form.face === ":)"}
                    onChange={handlerHappyFace}
                    />

                    <label htmlFor="sad-face">:(</label>
                    <input 
                    className="editor__text-faces"
                    type="radio"
                    name="face"
                    id="sad-face"
                    value=":("
                    checked={form.face === ":("}
                    onChange={handlerHappyFace}
                    />
                </fieldset>
                <fieldset className= {`editor__box ${happyMessage}`}>
                    <label htmlFor="message">Message</label>
                    <input 
                    className="editor__text"
                    type="text"
                    name="message"
                    id="message"
                    placeholder= "Why is it a good day?"
                    />
                </fieldset>
                <button>GUARDAR</button>

                <button>Cancelar</button>
            </form>
            </section>
            </div>
        )
    }
}

export default Editor;