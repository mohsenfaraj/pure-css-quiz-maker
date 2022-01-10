import {useState , useEffect, createRef} from 'react'
import Question from "./Question"
import generateCssQuiz from './Generator'
import cssCode from "./CssCode"
function App() {
  const STORAGE_KEY = "QuizMakerDB"

  const question1 = {
    title:"" ,
    options:["" , "" , "" , ""],
    description:"" , 
    correct : 0
  }
  
  const [questions, setquestions] = useState([question1])
  const [customCss , setCustomCss] = useState(cssCode)
  const [rtlmode , setRtlmode] = useState(false)

  const resultInput = createRef()
  // load data once page loaded from local storage
  useEffect(() => {
    const json = localStorage.getItem(STORAGE_KEY)
    if (!(json === null || json === "")){
      const data = JSON.parse(json)
      setquestions(data.questions)
      setRtlmode(data.rtlmode)
      setCustomCss(data.customCss)
    }
  }, [])

  function addOptionToQuestion(index){
    const newState = [...questions] 
    newState[index].options.push("")
    setquestions(newState)
  }

  function addQuestion(){
    const newState = [...questions]
    newState.push(question1)
    setquestions(newState)
  }

  function removeQuestion(indexToRemove) {
    let newState = [...questions]
    newState = newState.filter((item , index)=>{
      return index !== indexToRemove
    })
    setquestions(newState)
  }

  function removeOption(questionIndex , optionIndex){
    let newState = [...questions]
    newState[questionIndex].options = newState[questionIndex].options.filter((value , index)=>{
      return optionIndex !== index
    })
    setquestions(newState)
  }

  function updateQuestion(index , title , desc , options , correct){
    let newState = [...questions]
    if (title !== null) newState[index].title = title
    if (desc !== null) newState[index].description = desc
    if (options !== null) newState[index].options = options
    if (correct !== null) newState[index].correct = correct
    setquestions(newState)
  }

  function handleClickData() {
    const jsonData = JSON.stringify(questions)
    resultInput.current.value = jsonData
  }

  function handleClickSave() {
    const data = {
      questions : questions , 
      rtlmode : rtlmode , 
      customCss : customCss
    }
    const json = JSON.stringify(data)
    console.log(json)
    localStorage.setItem(STORAGE_KEY , json)
    alert("code saved to browser successfully!")
  }

  function handleClearSaved(){
    if (window.confirm("are you sure about that?")){
      localStorage.setItem(STORAGE_KEY , "")
      setquestions([question1])
      resultInput.current.value = ""
    }
  }

  function handleCodeClick(){
    const code = generateCssQuiz(questions , rtlmode , customCss)
    resultInput.current.value = code
  }

  function handleRtlChange() {
    setRtlmode(!rtlmode)
  }

  function handleCssChange(event) {
    const text = event.target.value ;
    if (text === ""){
      setCustomCss(cssCode)
    }
    else {
      setCustomCss(text);
    }
  }

  return (
    <div className="main">
      <div className="header">
      <h1>Pure Css Quiz Creator</h1>
      <p>make any multiple choice quiz without using any JS!</p>
      <p>created by <a href="https://chortak.blog.ir" target="_blank" rel="noreferrer"> Mohsen Farajollahi </a></p>
      </div>
      {
        questions.map((question , index)=> {
         return <Question data={question} index={index} addOption={addOptionToQuestion}
         removeQuestion={removeQuestion} removeOption={removeOption} updateQuestion={updateQuestion}
         key={index}
         />
        })
      }
      <button onClick={()=>{addQuestion()}} className="btn btn-primary">+ Add Question</button>
      <div className="alter">
        <div>
          <input type="checkbox" id="isrtlenabled" onChange={handleRtlChange} checked={rtlmode}/>
          <label htmlFor="isrtlenabled">right-to-left?</label>
        </div>
        <textarea placeholder="Custom Css Code" onChange={handleCssChange} value={customCss === cssCode ? "" : customCss} className="textBox"></textarea>
      </div>
      <div className="action-panel">
        <button onClick={handleCodeClick} className="btn btn-primary">Code</button>
        <button onClick={handleClickData} className="btn">Data</button>
        <button onClick={handleClickSave} className="btn btn-green">Save</button>
        <button onClick={handleClearSaved} className="btn btn-danger">Clear Saved</button>
      </div>
      <textarea ref={resultInput} cols="60" rows="10" className="textBox" placeholder="get Code/Data from here"></textarea>
    </div>
  );

}

export default App;
