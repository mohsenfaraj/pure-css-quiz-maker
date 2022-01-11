(this["webpackJsonpquiz-maker"]=this["webpackJsonpquiz-maker"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(15)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(6),r=t.n(c),i=(t(12),t(1)),s=t(4);t(13),t(14);function l(e){return o.a.createElement("div",{className:"option"},o.a.createElement("label",{className:"container"},o.a.createElement("input",{type:"checkbox",checked:e.isChecked,onChange:function(n){e.changeCorrect(e.optionIndex)}}),o.a.createElement("span",{className:"checkmark"})),o.a.createElement("input",{type:"text",value:e.data||"",onChange:function(n){e.changeOption(e.optionIndex,n.target.value)},placeholder:"option #"+(e.optionIndex+1)}),o.a.createElement("button",{onClick:function(){e.removeOption(e.questionIndex,e.optionIndex)},className:"btn btn-danger"},"delete"))}function u(e){function n(n,t){var a=Object(i.a)(e.data.options);a[n]=t,e.updateQuestion(e.index,null,null,a,null)}function t(n){e.updateQuestion(e.index,null,null,null,n)}return o.a.createElement("div",{className:"question"},o.a.createElement("div",{className:"question-header"},o.a.createElement("textarea",{value:e.data.title,onChange:function(n){e.updateQuestion(e.index,n.target.value,null,null,null)},placeholder:"Question #".concat(e.index+1," title")})),o.a.createElement("div",{className:"question-body"},o.a.createElement("div",{className:"options"},e.data.options.map((function(a,c){return o.a.createElement(l,{key:c,data:a,questionIndex:e.index,optionIndex:c,removeOption:e.removeOption,changeOption:n,changeCorrect:t,isChecked:e.data.correct===c})})),o.a.createElement("button",{onClick:function(){e.addOption(e.index)},className:"btn btn-primary"},"Add Option")),o.a.createElement("div",{className:"description"},o.a.createElement("textarea",{value:e.data.description,onChange:function(n){e.updateQuestion(e.index,null,n.target.value,null,null)},placeholder:"enter the description here"})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.removeQuestion(e.index)},className:"btn btn-danger"},"delete question"))))}var d='\n.question * , .question {\n    padding: 0 ;\n    margin : 0 ;\n    box-sizing: border-box;\n  }\n  \n .question fieldset {\n    border: 1px solid #ccc;\n    margin: 2rem 0;\n  }\n  \n.question fieldset legend {\n    font-weight: 700;\n  }\n  \n  .question .answer__item {\n    background-color: rgb(233, 233, 233);\n    display: block;\n    position: relative;\n    cursor: pointer;\n    padding: 1.5rem 1rem;\n    margin: 0.5rem;\n    box-shadow: #ccc 1px 1px 1px;\n    transition: background .5s ease;\n  }\n  \n  /* Hide Radio Buttons and Submit Button */\n  .question input[type="radio"] {\n    display: none;\n  }\n  .question button[type="reset"]{\n    background : rgb(233, 233, 233) ;\n    border: 1px solid #ccc ;\n    padding: 10px 5px ;\n  }\n  /* Any correct answer on any answered question, highlight in light green */\n  .question :valid .answer__item--is-correct {\n    background-color: rgb(234, 226, 116);\n    transition : all .5s ease ;\n  }\n  \n  /* Show any extra explanatory text */\n  .question .answer__reveal-text {\n    display: none;\n    margin-top: 15px;\n  }\n  .question :valid .answer__reveal-text {\n    display: block;\n  }\n  \n  /* Any chosen answer, highlight in red */\n  .question :checked + .answer__item {\n    color: #ffffff;\n    background-color: #9b2626;\n    transition: all .5s ease ;\n  }\n  \n  /* Any correctly chosen answer, highlight in bright green */\n  .question :checked + .answer__item--is-correct {\n    background-color: #3db540;\n    transition: all .5s ease;\n  }\n  \n  /* Show the icon for the selected answer */\n  .question :checked + .answer__item .answer__icon {\n    display: inline-block;\n  }\n  \n  /* prevent chosing another answer once chosen */\n  .question :valid {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .question :valid + .answer__item {\n    pointer-events: none;\n  }\n  \n  /* keep track of score */\n  .question form {\n    counter-reset: quiz-score;\n  }\n  .question :checked + .answer__item--is-correct {\n    counter-increment: quiz-score;\n  }\n  .question .score:after {\n    content: counter(quiz-score) "/" attr(data-question-count);\n  }\n  \n  /* show score once quiz has been completed */\n  .question .message {\n    display: none;\n    text-align: center;\n  }\n  .question form:valid .message {\n    display: block;\n  }\n  .question .cleardiv {\n    text-align: center;\n  }\n';var m=function(){var e={title:"",options:["","","",""],description:"",correct:0},n=Object(a.useState)([e]),t=Object(s.a)(n,2),c=t[0],r=t[1],l=Object(a.useState)(d),m=Object(s.a)(l,2),p=m[0],b=m[1],h=Object(a.useState)(!1),f=Object(s.a)(h,2),v=f[0],g=f[1],x=Object(a.createRef)();function k(e){var n=Object(i.a)(c);n[e].options.push(""),r(n)}function q(e){var n=Object(i.a)(c);n=n.filter((function(n,t){return t!==e})),r(n)}function E(e,n){var t=Object(i.a)(c);t[e].options=t[e].options.filter((function(e,t){return n!==t})),r(t)}function w(e,n,t,a,o){var s=Object(i.a)(c);null!==n&&(s[e].title=n),null!==t&&(s[e].description=t),null!==a&&(s[e].options=a),null!==o&&(s[e].correct=o),r(s)}return Object(a.useEffect)((function(){var e=localStorage.getItem("QuizMakerDB");if(null!==e&&""!==e){var n=JSON.parse(e);r(n.questions),g(n.rtlmode),b(n.customCss)}}),[]),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Pure Css Quiz Creator"),o.a.createElement("p",null,"make any multiple choice quiz without using any JS!"),o.a.createElement("p",null,"created by ",o.a.createElement("a",{href:"https://chortak.blog.ir",target:"_blank",rel:"noreferrer"}," Mohsen Farajollahi "))),c.map((function(e,n){return o.a.createElement(u,{data:e,index:n,addOption:k,removeQuestion:q,removeOption:E,updateQuestion:w,key:n})})),o.a.createElement("button",{onClick:function(){!function(){var n=Object(i.a)(c);n.push(e),r(n)}()},className:"btn btn-primary"},"+ Add Question"),o.a.createElement("div",{className:"alter"},o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",id:"isrtlenabled",onChange:function(){g(!v)},checked:v}),o.a.createElement("label",{htmlFor:"isrtlenabled"},"right-to-left?")),o.a.createElement("textarea",{placeholder:"Custom Css Code",onChange:function(e){var n=e.target.value;b(""===n?d:n)},value:p===d?"":p,className:"textBox"})),o.a.createElement("div",{className:"action-panel"},o.a.createElement("button",{onClick:function(){var e=function(e,n,t){var a="";return a+="<style>".concat(t,"</style>"),a+='<div class="question"><form method="POST" class="is-not-results" autocomplete="off" '.concat(n?'dir="rtl"':"",">"),e.forEach((function(e,n){a+="\n        <fieldset>\n        <legend>".concat(n+1,". ").concat(e.title,'</legend>\n        <div class="answers">'),e.options.forEach((function(t,o){a+='            \n            <div class="answer">\n                <input type="radio" name="answers['.concat(n,']" id="answer-').concat(n,"-").concat(o,'" value="1" required>\n                <label for="answer-').concat(n,"-").concat(o,'" class="answer__item ').concat(e.correct===o?"answer__item--is-correct":"",'">\n                    ').concat(o+1,". ").concat(t,"   \n                    ").concat(e.correct===o?'<span class="answer__reveal-text">'.concat(e.description,"</span>"):"","\n                </label>\n            </div>")})),a+="\n        </div>\n        </fieldset>\n        "})),a+='\n<div class="message">\n    <p>'.concat(n?'\u0627\u0645\u062a\u06cc\u0627\u0632 \u0634\u0645\u0627: <span class="score" data-question-count="'.concat(e.length,'"></span></p>'):'Your Score: <span class="score" data-question-count="'.concat(e.length,'"></span></p>'),'\n</div>\n<div class="cleardiv">\n    <button type="reset">').concat(n?"\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646 \u067e\u0627\u0633\u062e\u200c\u0647\u0627":"Clear answers","</button>\n</div>\n</form></div>")}(c,v,p);x.current.value=e},className:"btn btn-primary"},"Code"),o.a.createElement("button",{onClick:function(){var e=JSON.stringify(c);x.current.value=e},className:"btn"},"Data"),o.a.createElement("button",{onClick:function(){var e={questions:c,rtlmode:v,customCss:p},n=JSON.stringify(e);console.log(n),localStorage.setItem("QuizMakerDB",n),alert("code saved to browser successfully!")},className:"btn btn-green"},"Save"),o.a.createElement("button",{onClick:function(){window.confirm("are you sure about that?")&&(localStorage.setItem("QuizMakerDB",""),r([e]),x.current.value="")},className:"btn btn-danger"},"Clear Saved")),o.a.createElement("textarea",{ref:x,cols:"60",rows:"10",className:"textBox",placeholder:"get Code/Data from here"}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.72584925.chunk.js.map