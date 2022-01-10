
import React from "react"
import "./Option.css"
export default function Option(props) {
    function handleRemoveOption() {
        props.removeOption(props.questionIndex , props.optionIndex)
    }

    function handleUpdateText(event){
        props.changeOption(props.optionIndex , event.target.value)
    }

    function handleUpdateCorrectAnswer(event){
        props.changeCorrect(props.optionIndex)
    }

    return (
        <div className="option">
            <label className="container">
            <input type="checkbox" checked={props.isChecked} onChange={handleUpdateCorrectAnswer} />
            <span className="checkmark"></span>
            </label>
            <input type="text" value={props.data || ""} onChange={handleUpdateText} placeholder={"option #" + (props.optionIndex+1)}/>
            <button onClick={handleRemoveOption} className="btn btn-danger">delete</button>
        </div>
    )
}