button = document.getElementById("dark-mode-btn");

button.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const geminiApi Key = "PASTE_YOUR_KEY_HERE"; 
const portfolioFacts =
Name: Liam
Skills: Python, Swift
Profect: 1step Prep Mobile App
Contribution: Developed college acceptance prediction algorithm
 ;
 
 const guideForm = document.querySelector("#guide-form");
 const guideQuestion = document.querySelector("#guide-question");
 const guideAnswer = document.querySelector("#guide-answer");

 guideForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    guideAnswer.textContent = "Thinking..."

    const prompt = 
    You are a helpful guide for a student's portfolio website.

    Only answer using these portfolio facts:
    ${potrfolioFacts}

    If the facts do not andswer the question, say:
    "I don't have that information in this portfolio yet"

    Question: ${guideQuestion.value}
     ;

