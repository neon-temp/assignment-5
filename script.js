let playagain;
do {
  // This code will run at least once
  alert("Quiz has started....");
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
    let userAnswer = prompt(assignmentquestions[i].prompt);
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
  alert(
    `Quiz completed, you scored ${score} out of ${assignmentquestions.length}`
  );
  // the loop continues as long as the user picks "yes"
  playagain = prompt("Do you want to answer again? (yes/no)");
} while (playagain === "yes");
alert("Thanks for playing!");
