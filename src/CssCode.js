const cssCode = 
`
* {
    padding: 0 ;
    margin : 0 ;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif ;
  }
  
  fieldset {
    border: 1px solid #ccc;
    margin: 2rem 0;
  }
  
  fieldset legend {
    font-weight: 700;
  }
  
  .answer__item {
    background-color: rgb(233, 233, 233);
    display: block;
    position: relative;
    cursor: pointer;
    padding: 1.5rem 1rem;
    margin: 0.5rem;
    box-shadow: #ccc 1px 1px 1px;
    transition: background .5s ease;
  }
  
  /* Hide Radio Buttons and Submit Button */
  input[type="radio"] {
    display: none;
  }
  button[type="reset"]{
    background : rgb(233, 233, 233) ;
    border: 1px solid #ccc ;
    padding: 10px 5px ;
  }
  /* Any correct answer on any answered question, highlight in light green */
  :valid .answer__item--is-correct {
    background-color: rgb(234, 226, 116);
    transition : all .5s ease ;
  }
  
  /* Show any extra explanatory text */
  .answer__reveal-text {
    display: none;
    margin-top: 15px;
  }
  :valid .answer__reveal-text {
    display: block;
  }
  
  /* Any chosen answer, highlight in red */
  :checked + .answer__item {
    color: #ffffff;
    background-color: #9b2626;
    transition: all .5s ease ;
  }
  
  /* Any correctly chosen answer, highlight in bright green */
  :checked + .answer__item--is-correct {
    background-color: #3db540;
    transition: all .5s ease;
  }
  
  /* Show the icon for the selected answer */
  :checked + .answer__item .answer__icon {
    display: inline-block;
  }
  
  /* prevent chosing another answer once chosen */
  :valid {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  :valid + .answer__item {
    pointer-events: none;
  }
  
  /* keep track of score */
  form {
    counter-reset: quiz-score;
  }
  :checked + .answer__item--is-correct {
    counter-increment: quiz-score;
  }
  .score:after {
    content: counter(quiz-score) "/" attr(data-question-count);
  }
  
  /* show score once quiz has been completed */
  .message {
    display: none;
    text-align: center;
  }
  form:valid .message {
    display: block;
  }
  .cleardiv {
    text-align: center;
  }
`
export default cssCode ;