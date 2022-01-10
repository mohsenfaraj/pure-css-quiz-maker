
import React from "react"
import "./Question.css"
import Option from "./Option"

export default function Question(props) {

    function handleAddOption() {
        props.addOption(props.index)
    }

    function handleRemoveQuestion() {
        props.removeQuestion(props.index)
    }
    
    function handleTitleChange(event) {
        props.updateQuestion(props.index , event.target.value , null , null , null)
    }

    function handleDescChange(event){
        props.updateQuestion(props.index , null , event.target.value , null , null)
    }

    function changeOption(optionToChange , optionText){
        let newOptions = [...props.data.options]
        newOptions[optionToChange] = optionText
        props.updateQuestion(props.index , null , null , newOptions , null)
    }
    
    function changeCorrect(correctAnswer){
        props.updateQuestion(props.index , null , null , null , correctAnswer)
    }

    return (
<div className="question">
  <div className="question-header">
      <textarea value={props.data.title} onChange={handleTitleChange} placeholder={`Question #${props.index + 1} title`}></textarea>
</div>
  <div className="question-body">
      <div className="options">
    {
        props.data.options.map((option , index)=>{
            return <Option
            key = {index}
            data={option} 
            questionIndex={props.index}
            optionIndex={index}
            removeOption={props.removeOption} 
            changeOption={changeOption}
            changeCorrect = {changeCorrect}
            isChecked = {props.data.correct === index}
            />
        })
    }   
    <button onClick={handleAddOption} className="btn btn-primary">Add Option</button> 
    </div>  
    <div className="description">
        <textarea value={props.data.description} onChange={handleDescChange} placeholder="enter the description here"></textarea>
    </div>
    <div>
        <button onClick={handleRemoveQuestion} className="btn btn-danger">delete question</button>
    </div>
  </div>
</div>
    )
}