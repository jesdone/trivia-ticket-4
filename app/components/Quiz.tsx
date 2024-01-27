'use client'

import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const quizData = {
    topic: "Art",
    level: "Beginner",
    totalQuestions: 20,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "Which 20th century Mexican artist contracted polio as a child?",
        choices: [
          "Deigo Rivera",
          "Frida Kahlo",
          "David Alfaro Siqueiros",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Frida Kahlo",
      },
      {
        question:
          "Which type of flower features heavily in the work of Claude Monet?",
        choices: [
          "Rose",
          "Carnation",
          "Water Lily",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Water Lily",
      },
      {
        question:
          "Which artist was born in 1632 and lived all his life in Delft in the Netherlands?",
        choices: [
          "Van Gogh",
          "Rembrandt",
          "Vermeer",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "Vermeer",
      },
      {
        question:
          "What boy's name is also the name of Michaelangelo's most famous sculpture?",
        choices: ["Michael", "David", "John", "Pietro"],
        type: "MCQs",
        correctAnswer: "David",
      },
      {
        question:
          "What is the name of the painting of a farming couple, one with a pitchfork, in front of a wooden house?",
        choices: [
          "Americana",
          "Portrait of America",
          "Farming Couple",
          "American Gothic",
        ],
        type: "MCQs",
        correctAnswer: "American Gothic",
      },
    ],
  };

  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + quizData.perQuestionScore);
    }

    // Move to the next question or end the quiz
    if (currentQuestion < quizData.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz Completed! Your Score: ${score}/${quizData.totalQuestions * quizData.perQuestionScore}`);
      // You can perform additional actions after the quiz is completed
    }
  };

  return (
    <div>
      <h2>Multiple Choice Quiz</h2>
      <p>Question {currentQuestion + 1}/{quizData.totalQuestions}</p>
      <p>{quizData.questions[currentQuestion].question}</p>

      <ul>
        {quizData.questions[currentQuestion].choices.map((choice, index) => (
          <li key={index} onClick={() => handleAnswerClick(choice)}>
            {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;













// import React from "react";


// const quiz = () => {
//   return(
// <div>
//   topic: 'Art',
//   level: 'Beginner',
//   totalQuestions: 20,
//   perQuestionScore: 5,
//   questions: [
//     {
//       question: 'Which 20th century Mexican artist contracted polio as a child?',
//       choices: ['Deigo Rivera()', 'Frida Kahlo()', 'David Alfaro Siqueiros()', 'None of the above'],
//       type: 'MCQs',
//       correctAnswer: 'Frida Kahlo()',
//     },
//     {
//       question: 'Which type of flower features heavily in the work of Claude Monet?',
//       choices: ['Rose', 'Carnation', 'Water Lily', 'None of the above'],
//       type: 'MCQs',
//       correctAnswer: 'Water Lily',
//     },
//     {
//       question:
//         'Which of the following methods can be used to display data in some form using Javascript?',
//       choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
//       type: 'MCQs',
//       correctAnswer: 'All of the above',
//     },
//     {
//       question: "What boy's name is also the name of Michaelangelo's most famous sculpture?",
//       choices: ['Michael', 'David', 'John', 'Pietro'],
//       type: 'MCQs',
//       correctAnswer: 'David',
//     },
//     {
//       question: "What is the name of the painting of a farming couple, one with a pitchfork, in front of a wooden house?",
//       choices: ['Americana', 'Portrait of America', 'Farming Couple', 'American Gothic'],
//       type: 'MCQs',
//       correctAnswer: 'American Gothic', 
//     },
//   ],
//   </div>
//   );
// };




// export default quiz;
