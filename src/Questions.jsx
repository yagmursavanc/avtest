import React, { useState } from 'react';

function AVTestApp() {
  const [answers, setAnswers] = useState([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const questions = [
    {
      question: "What is the standard voltage for most audio systems?",
      options: ["110V", "120V", "230V", "12V"],
      correctAnswer: "230V",
    },
    {
      question: "What does an amplifier do?",
      options: ["Increase voltage", "Decrease voltage", "Increase sound", "Decrease sound"],
      correctAnswer: "Increase sound",
    },
  {
    question: "What does HDMI stand for?",
    options: ["High Definition Multimedia Interface", "High Data Media Interface", "Heavy Duty Machine Interface", "High Definition Modular Interface"],
    correctAnswers: "High Definition Multimedia Interface"
  },
  {
    question: "What device is commonly used to mix audio signals?",
    options: ["Amplifier", "Mixer", "Equalizer", "Compressor"],
     correctAnswers "Mixer"
  },
  {
    question: "Which microphone type is best for live concerts?",
    options: ["Condenser", "Ribbon", "Dynamic", "Lavalier"],
    answer: "Dynamic"
  },
  {
    question: "What unit measures audio signal level?",
    options: ["Watts", "Decibels", "Hertz", "Volts"],
    answer: "Decibels"
  },
  {
    question: "What does XLR refer to?",
    options: ["A cable connector", "A speaker brand", "A lighting console", "A video format"],
    answer: "A cable connector"
  },
  {
    question: "Which lighting type is most energy-efficient?",
    options: ["Halogen", "LED", "Fluorescent", "Incandescent"],
    answer: "LED"
  },
  {
    question: "Which part of a speaker converts electrical energy into sound?",
    options: ["Diaphragm", "Magnet", "Voice coil", "Horn"],
    answer: "Voice coil"
  },
  {
    question: "What tool measures the sound level in a venue?",
    options: ["Spectrum analyzer", "Sound pressure meter", "Oscilloscope", "Equalizer"],
    answer: "Sound pressure meter"
  },
  {
    question: "Which cable is best for long audio runs?",
    options: ["Unbalanced RCA", "Balanced XLR", "TS Cable", "Mini-Jack"],
    answer: "Balanced XLR"
  },
  {
    question: "Which term means reducing feedback in a sound system?",
    options: ["Notching", "Boosting", "Compression", "Delay"],
    answer: "Notching"
  },
  {
    question: "What is phantom power used for?",
    options: ["Powering dynamic microphones", "Powering condenser microphones", "Boosting speaker power", "Lighting control"],
    answer: "Powering condenser microphones"
  },
  {
    question: "Which frequency range is considered 'bass'?",
    options: ["20Hz - 250Hz", "500Hz - 1kHz", "2kHz - 4kHz", "10kHz - 20kHz"],
    answer: "20Hz - 250Hz"
  },
  {
    question: "In video walls, what does 'bezel' mean?",
    options: ["The screen resolution", "The border around screens", "The screen brightness", "The mounting structure"],
    answer: "The border around screens"
  },
  {
    question: "What device boosts a weak video signal?",
    options: ["Splitter", "Amplifier", "Matrix", "Converter"],
    answer: "Amplifier"
  },
  {
    question: "What does DMX control?",
    options: ["Video walls", "Speakers", "Lighting fixtures", "Microphones"],
    answer: "Lighting fixtures"
  },
  {
    question: "Which type of projector is best in bright environments?",
    options: ["LCD", "LED", "Laser", "DLP"],
    answer: "Laser"
  },
  {
    question: "What is the function of an audio snake?",
    options: ["Cable management", "Audio signal routing", "Speaker tuning", "Lighting control"],
    answer: "Audio signal routing"
  },
  {
    question: "Which file format is NOT a video file?",
    options: ["MOV", "MP4", "AVI", "MP3"],
    answer: "MP3"
  },
  {
    question: "In AV, what does 'latency' refer to?",
    options: ["Signal delay", "Signal distortion", "Signal strength", "Signal clarity"],
    answer: "Signal delay"
  },
  {
    question: "Which color cable is typically used for video (composite)?",
    options: ["Red", "Yellow", "White", "Blue"],
    answer: "Yellow"
  }
];

  // Handle the user's selection of answers
  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  // Submit the test and calculate the number of correct answers
  const submitTest = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct += 1;
      }
    });
    setCorrectAnswers(correct);
    setIsTestCompleted(true);
  };

  // Reset the test to retake it
  const resetTest = () => {
    setAnswers([]);
    setCorrectAnswers(0);
    setIsTestCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🎧 AV Technician Skills Test</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Complete the tasks to prove your skills in real-world AV setups.
        </p>
      </header>

      {!isTestCompleted ? (
        <div>
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-semibold">{question.question}</h2>
              <div className="mt-2">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    className="bg-blue-500 text-white px-4 py-2 m-2 rounded-md"
                    onClick={() => handleAnswer(index, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={submitTest}
            className="mt-6 bg-green-500 text-white py-2 px-6 rounded-full"
          >
            Submit Test
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">Test Results</h2>
          <p className="text-xl mb-4">You answered {correctAnswers} out of {questions.length} questions correctly!</p>
          {questions.map((question, index) => (
            <div key={index} className="my-4">
              <p className="font-semibold">{question.question}</p>
              <p>
                Your answer: <span>{answers[index]}</span>
              </p>
              <p>
                Correct answer: <span className="text-green-600">{question.correctAnswer}</span>
              </p>
              {answers[index] === question.correctAnswer ? (
                <p className="text-green-600">Correct!</p>
              ) : (
                <p className="text-red-600">Incorrect!</p>
              )}
            </div>
          ))}
          <button
            onClick={resetTest}
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full"
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
}

export default AVTestApp;
