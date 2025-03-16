import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import QuestionComponent from '../components/QuestionComponent';
import TimerComponent from '../components/TimerComponent';
import ProgressBar from '../components/ProgressBar';
import { questions } from '../data/questions';

const QuizScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          navigation.navigate('Results', { score, totalQuestions: questions.length });
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigation.navigate('Results', { score: score + (isCorrect ? 1 : 0), totalQuestions: questions.length });
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TimerComponent timeRemaining={timeRemaining} />
      <ProgressBar
        progress={(currentQuestionIndex + 1) / questions.length}
        totalQuestions={questions.length}
        currentQuestion={currentQuestionIndex + 1}
      />
      <QuestionComponent
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
});

export default QuizScreen;

