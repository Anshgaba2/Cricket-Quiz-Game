import React, { useState, useEffect } from 'react';

const CricketQuiz = () => {
  // Quiz data with 30 cricket questions
  const quizData = [
    {
      video: "cricket_clip_1",
      question: "What type of delivery was just bowled?",
      options: ["Yorker", "Bouncer", "Full Toss", "Googly"],
      correct: 0
    },
    {
      video: "cricket_clip_2",
      question: "What was the batsman's mistake in this clip?",
      options: ["Playing across the line", "Not watching the ball", "Poor footwork", "Wrong shot selection"],
      correct: 2
    },
    {
      video: "cricket_clip_3",
      question: "Which fielding position would have prevented this boundary?",
      options: ["Deep Mid-wicket", "Third Man", "Fine Leg", "Point"],
      correct: 1
    },
    {
      video: "cricket_clip_4",
      question: "What type of catch opportunity was this?",
      options: ["Slip Catch", "Caught Behind", "Deep Field Catch", "Close-in Catch"],
      correct: 3
    },
    {
      video: "cricket_clip_5",
      question: "What bowling variation did the bowler just use?",
      options: ["Slower Ball", "Knuckle Ball", "Cutter", "Off-spin"],
      correct: 0
    },
    {
      video: "cricket_clip_6",
      question: "What was the main reason for this wicket?",
      options: ["Pace", "Swing", "Spin", "Bounce"],
      correct: 1
    },
    {
      video: "cricket_clip_7",
      question: "Which shot was the batsman attempting?",
      options: ["Cover Drive", "Pull Shot", "Square Cut", "Sweep Shot"],
      correct: 1
    },
    {
      video: "cricket_clip_8",
      question: "What fielding error occurred in this clip?",
      options: ["Misfield", "Dropped Catch", "Overthrow", "Wrong Position"],
      correct: 2
    },
    {
      video: "cricket_clip_9",
      question: "What type of wicket-keeping skill is shown?",
      options: ["Stumping", "Catch", "Run-out", "Byes Prevention"],
      correct: 0
    },
    {
      video: "cricket_clip_10",
      question: "What bowling line was most effective here?",
      options: ["Off Stump", "Leg Stump", "Middle Stump", "Outside Off"],
      correct: 3
    },
    {
      video: "cricket_clip_11",
      question: "What type of batting technique is demonstrated?",
      options: ["Forward Defense", "Back Foot Drive", "Leg Glance", "Late Cut"],
      correct: 2
    },
    {
      video: "cricket_clip_12",
      question: "Which captaincy decision led to this wicket?",
      options: ["Field Placement", "Bowling Change", "Review", "Declaration"],
      correct: 0
    },
    {
      video: "cricket_clip_13",
      question: "What weather condition affected this play?",
      options: ["Wind", "Rain", "Dew", "Sunlight"],
      correct: 2
    },
    {
      video: "cricket_clip_14",
      question: "What running between wickets mistake occurred?",
      options: ["No Call", "Wrong Call", "Slow Running", "Not Grounding Bat"],
      correct: 3
    },
    {
      video: "cricket_clip_15",
      question: "What power-play strategy is being used?",
      options: ["Attacking Field", "Defensive Field", "Mixed Strategy", "Bowling Powerplay"],
      correct: 0
    },
    {
      video: "cricket_clip_16",
      question: "What type of spin bowling variation is this?",
      options: ["Doosra", "Carrom Ball", "Arm Ball", "Top Spinner"],
      correct: 2
    },
    {
      video: "cricket_clip_17",
      question: "What batting position strategy is evident?",
      options: ["Pinch Hitter", "Anchor", "Finisher", "Opener"],
      correct: 1
    },
    {
      video: "cricket_clip_18",
      question: "What type of ground fielding is shown?",
      options: ["Sliding Stop", "Dive Stop", "Quick Pick-up", "Boundary Save"],
      correct: 3
    },
    {
      video: "cricket_clip_19",
      question: "What bowling plan is the captain implementing?",
      options: ["Attack Stumps", "Bowl Wide", "Short Pitched", "Vary Pace"],
      correct: 3
    },
    {
      video: "cricket_clip_20",
      question: "What batting approach is best for this situation?",
      options: ["Aggressive", "Defensive", "Rotating Strike", "Big Hitting"],
      correct: 2
    },
    {
      video: "cricket_clip_21",
      question: "What type of wicket celebration is this?",
      options: ["Team Huddle", "Bowler's Salute", "Crowd Appeal", "Stump Celebration"],
      correct: 1
    },
    {
      video: "cricket_clip_22",
      question: "What fielding formation is being used?",
      options: ["Ring Field", "Attacking Field", "Defensive Spread", "Close Catching"],
      correct: 0
    },
    {
      video: "cricket_clip_23",
      question: "What batting technique error is visible?",
      options: ["Head Movement", "Foot Placement", "Bat Swing", "Balance"],
      correct: 1
    },
    {
      video: "cricket_clip_24",
      question: "What bowling rhythm change occurred?",
      options: ["Faster", "Slower", "Same Pace", "Irregular"],
      correct: 1
    },
    {
      video: "cricket_clip_25",
      question: "What type of cricket format strategy is this?",
      options: ["Test Match", "ODI", "T20", "T10"],
      correct: 2
    },
    {
      video: "cricket_clip_26",
      question: "What mental aspect of cricket is demonstrated?",
      options: ["Pressure Handling", "Concentration", "Aggression", "Patience"],
      correct: 0
    },
    {
      video: "cricket_clip_27",
      question: "What equipment factor influenced this play?",
      options: ["Bat Weight", "Pad Position", "Glove Grip", "Helmet Vision"],
      correct: 1
    },
    {
      video: "cricket_clip_28",
      question: "What team communication is evident?",
      options: ["Field Setting", "Bowling Plan", "Batting Order", "Time Management"],
      correct: 0
    },
    {
      video: "cricket_clip_29",
      question: "What match situation influenced this decision?",
      options: ["Required Run Rate", "Wickets in Hand", "Overs Remaining", "All of Above"],
      correct: 3
    },
    {
      video: "cricket_clip_30",
      question: "What cricket skill development is shown?",
      options: ["Technique", "Fitness", "Mental Strength", "Game Awareness"],
      correct: 3
    }
  ];

  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerRevealed, setAnswerRevealed] = useState(false);

  // Start quiz function
  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setQuizCompleted(false);
    setAnswerRevealed(false);
  };

  // Select option function
  const selectOption = (optionIndex) => {
    if (selectedOption !== null || answerRevealed) return;

    setSelectedOption(optionIndex);
    setAnswerRevealed(true);

    // Show correct answer after delay
    setTimeout(() => {
      setShowAnswer(true);
      
      // Update score
      const currentQuestion = quizData[currentQuestionIndex];
      if (optionIndex === currentQuestion.correct) {
        setScore(prevScore => prevScore + 4);
      } else {
        setScore(prevScore => prevScore - 1);
      }
    }, 1000);
  };

  // Next question function
  const nextQuestion = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
      setQuizCompleted(true);
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
    setAnswerRevealed(false);
  };

  // Restart quiz function
  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setAnswerRevealed(false);
  };

  // Get performance data
  const getPerformanceData = () => {
    if (score >= 100) {
      return {
        class: 'excellent',
        text: '🏆 Excellent! Cricket Expert!',
        message: 'Outstanding performance! You truly know your cricket inside out.'
      };
    } else if (score >= 60) {
      return {
        class: 'good',
        text: '👏 Good! Cricket Enthusiast!',
        message: 'Great job! You have solid cricket knowledge.'
      };
    } else if (score >= 20) {
      return {
        class: 'average',
        text: '👍 Average! Cricket Fan!',
        message: 'Not bad! Keep watching more cricket to improve.'
      };
    } else {
      return {
        class: 'poor',
        text: '📚 Keep Learning!',
        message: 'Don\'t worry! Cricket is a complex game. Keep practicing!'
      };
    }
  };

  // Get option class based on selection and correctness
  const getOptionClass = (optionIndex) => {
    if (!showAnswer) {
      return selectedOption === optionIndex ? 'bg-blue-600 text-white' : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 hover:border-blue-500';
    }

    const currentQuestion = quizData[currentQuestionIndex];
    if (optionIndex === currentQuestion.correct) {
      return 'bg-green-500 text-white animate-pulse';
    } else if (optionIndex === selectedOption && optionIndex !== currentQuestion.correct) {
      return 'bg-red-500 text-white animate-bounce';
    }
    
    return 'bg-gray-100';
  };

  // Start Screen Component
  if (!quizStarted && !quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            🏏 Cricket Quiz Master
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Test your cricket knowledge with 30 exciting video-based questions!
          </p>
          <p className="text-lg text-gray-700 mb-8">
            <strong className="text-blue-600">Scoring:</strong> +4 points for correct answers, -1 point for wrong answers
          </p>
          <button
            onClick={startQuiz}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Final Screen Component
  if (quizCompleted) {
    const performance = getPerformanceData();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">🏆 Quiz Completed!</h2>
          <div className="text-6xl font-bold text-blue-600 mb-6">{score}</div>
          <div className={`text-2xl font-bold p-4 rounded-2xl mb-6 ${
            performance.class === 'excellent' ? 'bg-green-500 text-white' :
            performance.class === 'good' ? 'bg-blue-500 text-white' :
            performance.class === 'average' ? 'bg-orange-500 text-white' :
            'bg-red-500 text-white'
          }`}>
            {performance.text}
          </div>
          <p className="text-xl text-gray-600 mb-8">{performance.message}</p>
          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  // Main Quiz Screen
  const currentQuestion = quizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / 30) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            🏏 Cricket Quiz Master
          </h1>
          <div className="flex justify-between items-center mb-4 text-lg font-bold">
            <div className="text-blue-600">Score: {score}</div>
            <div className="text-blue-900">Question {currentQuestionIndex + 1} of 30</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-800 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="bg-white/98 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          {/* Video Container */}
          <div className="text-center mb-8">
            <div className="w-full max-w-2xl h-72 mx-auto bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
              🏏 Cricket Video Clip #{currentQuestionIndex + 1}
            </div>
          </div>

          {/* Question */}
          <div className="text-2xl font-bold text-blue-900 text-center mb-8">
            {currentQuestion.question}
          </div>

          {/* Options */}
          <div className="grid gap-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => selectOption(index)}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-lg font-medium ${getOptionClass(index)} ${
                  !answerRevealed ? 'hover:transform hover:scale-[1.02] hover:shadow-lg' : 'cursor-not-allowed'
                }`}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button
              onClick={nextQuestion}
              disabled={!showAnswer}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {currentQuestionIndex + 1 === 30 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketQuiz;