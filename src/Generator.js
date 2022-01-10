export default function generateCssQuiz(questions , rtlmode , customCss){
    let code = ""
    code += `<style>${customCss}</style>`
    code += `<form method="POST" class="is-not-results" autocomplete="off" ${rtlmode?'dir="rtl"' : '' }>`
    questions.forEach((question , questionIndex) => {
        code += `
        <fieldset>
        <legend>${questionIndex+1}. ${question.title}</legend>
        <div class="answers">`
        question.options.forEach((option , optionIndex) => {
            code += `            
            <div class="answer">
                <input type="radio" name="answers[${questionIndex}]" id="answer-${questionIndex}-${optionIndex}" value="1" required>
                <label for="answer-${questionIndex}-${optionIndex}" class="answer__item ${question.correct === optionIndex ? 'answer__item--is-correct' : '' }">
                    ${optionIndex+1}. ${option}   
                    ${question.correct === optionIndex ? `<span class="answer__reveal-text">${question.description}</span>` : ""}
                </label>
            </div>`
        });
        code += `
        </div>
        </fieldset>
        `
    });
code += `
<div class="message">
    <p>${
        rtlmode?
        `امتیاز شما: <span class="score" data-question-count="${questions.length}"></span></p>`:
        `Your Score: <span class="score" data-question-count="${questions.length}"></span></p>`
    }
</div>
<div class="cleardiv">
    <button type="reset">${rtlmode?"پاک کردن پاسخ‌ها":"Clear answers"}</button>
</div>
</form>`
return code ;
}