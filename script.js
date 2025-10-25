let playagain;
do {
  // This code will run at least once
  alert("Quiz has started....");
  const assignmentquestions = [
    {
      prompt: "15 * 5 =?",
      answer: "75",
    },
    {
      prompt: "Africa is a state",
      answer: "false",
    },
    {
      prompt: "How many times does the earth revole around the sun",
      answer: "365.25 days",
    },
    {
      prompt: "How many continents are there in the world",
      answer: "seven",
    },
    {
      prompt: "Who is the father of computer science?",
      answer: "Charles Babbage",
    },
    {
      prompt: "How many months are in a year?",
      answer: "12",
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
