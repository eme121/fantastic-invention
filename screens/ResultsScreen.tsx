import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ResultsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { score, totalQuestions } = route.params;

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary, fontFamily: theme.fonts.bold }]}>
        Quiz Results
      </Text>
      <Text style={[styles.score, { color: theme.colors.text, fontFamily: theme.fonts.regular }]}>
        Your Score: {score} / {totalQuestions}
      </Text>
      <Text style={[styles.percentage, { color: theme.colors.secondary, fontFamily: theme.fonts.bold }]}>
        {percentage}%
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={[styles.buttonText, { color: theme.colors.background, fontFamily: theme.fonts.bold }]}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    marginBottom: 10,
  },
  percentage: {
    fontSize: 48,
    marginBottom: 30,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default ResultsScreen;

