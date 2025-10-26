const { resolve } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question + "\n", (answer) => {
      resolve(answer);
    });
  });
}

async function runQuiz() {
  let playagain;
  do {
    // This code will run at least once
    console.log("Quiz has started....");
    const assignmentquestions = [
      {
        prompt: "If const y=2 , and let z=5, what is x when const x = z%y",
        answer: "1",
      },
      {
        prompt:
          "When using and/or operators, it is possible to use the word instead of the sign",
        answer: "false",
      },
      {
        prompt: "Among the variable types var is the most recommended",
        answer: "false",
      },
      {
        prompt:
          "what is defined as a container or label you assign to values or data you want to store?",
        answer: "Variables",
      },
      {
        prompt: "What does the 'b' in BODMAS mean?",
        answer: "Bracket",
      },
      {
        prompt: "JavaScript starts counting from?",
        answer: "0",
      },
    ];

    let score = 0;

    for (let i = 0; i < assignmentquestions.length; i++) {
      let userAnswer = await askQuestion(assignmentquestions[i].prompt);
      if (
        userAnswer !== null &&
        userAnswer.trim().toLowerCase() ===
          assignmentquestions[i].answer.toLowerCase()
      ) {
        score++;
        console.log("Correct");
      } else {
        console.log(
          "Incorrect. The expected answer:",
          assignmentquestions[i].answer
        );
      }
    }
    console.log(
      `Quiz completed, you scored ${score} out of ${assignmentquestions.length}`
    );
    // the loop continues as long as the user picks "yes"
    playagain = await askQuestion("Do you want to answer again? (yes/no)");
  } while (playagain === "yes");
  console.log("Thanks for playing!");
  rl.close();
}
runQuiz();
