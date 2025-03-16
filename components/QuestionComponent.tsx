import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';
import MathJax from 'react-native-mathjax';

const QuestionComponent = ({ question, onAnswer }) => {
  const theme = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      onAnswer(index === question.correctAnswer);
      setSelectedAnswer(null);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <MathJax
        mathJaxOptions={{
          messageStyle: 'none',
          extensions: ['tex2jax.js'],
          jax: ['input/TeX', 'output/HTML-CSS'],
          tex2jax: {
            inlineMath: [['$', '$']],
            displayMath: [['$$', '$$']],
            processEscapes: true,
          },
          TeX: {
            extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
          },
        }}
        style={{ width: '100%' }}
      >
        <Text style={[styles.question, { color: theme.colors.text, fontFamily: theme.fonts.bold }]}>
          {question.text}
        </Text>
      </MathJax>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            { backgroundColor: theme.colors.secondary },
            selectedAnswer === index && {
              backgroundColor: index === question.correctAnswer ? theme.colors.primary : theme.colors.error,
            },
          ]}
          onPress={() => handleAnswer(index)}
          disabled={selectedAnswer !== null}
        >
          <MathJax
            mathJaxOptions={{
              messageStyle: 'none',
              extensions: ['tex2jax.js'],
              jax: ['input/TeX', 'output/HTML-CSS'],
              tex2jax: {
                inlineMath: [['$', '$']],
                displayMath: [['$$', '$$']],
                processEscapes: true,
              },
              TeX: {
                extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
              },
            }}
            style={{ width: '100%' }}
          >
            <Text style={[styles.optionText, { color: theme.colors.text, fontFamily: theme.fonts.regular }]}>
              {option}
            </Text>
          </MathJax>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 15,
  },
  option: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default QuestionComponent;

