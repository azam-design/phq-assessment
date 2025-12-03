import { useState } from 'react';
import WelcomeScreen from './imports/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';

const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure",
  "Trouble concentrating on things",
  "Moving or speaking slowly, or being fidgety or restless",
  "Thoughts that you would be better off dead",
  "If you checked off any problems, how difficult have these problems made it for you?"
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'questions' | 'results'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));

  const handleStart = () => {
    setCurrentScreen('questions');
    setCurrentQuestion(0);
  };

  const handleAnswer = (questionIndex: number, answerValue: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerValue;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentScreen('results');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    // Sum first 9 questions only (last question about difficulty is not scored)
    return answers.slice(0, 9).reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0);
  };

  const getSeverity = (score: number) => {
    if (score <= 4) return "Minimal depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] relative">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}

        {currentScreen === 'questions' && (
          <QuestionScreen
            questionNumber={currentQuestion + 1}
            totalQuestions={10}
            questionText={questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={(value) => handleAnswer(currentQuestion, value)}
            onNext={handleNext}
            onBack={handleBack}
            canGoBack={currentQuestion > 0}
            onBackToWelcome={() => setCurrentScreen('welcome')}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen score={calculateScore()} severity={getSeverity(calculateScore())} />
        )}
      </div>
    </div>
  );
}