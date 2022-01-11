const cssCode = 
`
.question * , .question {
    padding: 0 ;
    margin : 0 ;
    box-sizing: border-box;
  }
  
 .question fieldset {
    border: 1px solid #ccc;
    margin: 2rem 0;
  }
  
.question fieldset legend {
    font-weight: 700;
  }
  
  .question .answer__item {
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
  .question input[type="radio"] {
    display: none;
  }
  .question button[type="reset"]{
    background : rgb(233, 233, 233) ;
    border: 1px solid #ccc ;
    padding: 10px 5px ;
  }
  /* Any correct answer on any answered question, highlight in light green */
  .question :valid .answer__item--is-correct {
    background-color: rgb(234, 226, 116);
    transition : all .5s ease ;
  }
  
  /* Show any extra explanatory text */
  .question .answer__reveal-text {
    display: none;
    margin-top: 15px;
  }
  .question :valid .answer__reveal-text {
    display: block;
  }
  
  /* Any chosen answer, highlight in red */
  .question :checked + .answer__item {
    color: #ffffff;
    background-color: #9b2626;
    transition: all .5s ease ;
  }
  
  /* Any correctly chosen answer, highlight in bright green */
  .question :checked + .answer__item--is-correct {
    background-color: #3db540;
    transition: all .5s ease;
  }
  
  /* Show the icon for the selected answer */
  .question :checked + .answer__item .answer__icon {
    display: inline-block;
  }
  
  /* prevent chosing another answer once chosen */
  .question :valid {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .question :valid + .answer__item {
    pointer-events: none;
  }
  
  /* keep track of score */
  .question form {
    counter-reset: quiz-score;
  }
  .question :checked + .answer__item--is-correct {
    counter-increment: quiz-score;
  }
  .question .score:after {
    content: counter(quiz-score) "/" attr(data-question-count);
  }
  
  /* show score once quiz has been completed */
  .question .message {
    display: none;
    text-align: center;
  }
  .question form:valid .message {
    display: block;
  }
  .question .cleardiv {
    text-align: center;
  }
`
export default cssCode ;