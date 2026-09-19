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
try {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": geminiApiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Gemini could not answer right now.");
  }

  const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;

  guideAnswer.textContent = 
    answer || "Gemini did not return an answer. Please try again.";
} catch (error) {
  guideAnswer.textContent = error.message;
}
});
