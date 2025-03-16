import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

const ProgressBar = ({ progress, totalQuestions, currentQuestion }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { backgroundColor: theme.colors.secondary }]}>
        <View
          style={[
            styles.progress,
            { width: `${progress * 100}%`, backgroundColor: theme.colors.primary },
          ]}
        />
      </View>
      <Text style={[styles.progressText, { color: theme.colors.text, fontFamily: theme.fonts.regular }]}>
        Question {currentQuestion} of {totalQuestions}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  progress: {
    height: '100%',
    borderRadius: 5,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ProgressBar;

