import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

const TimerComponent = ({ timeRemaining }) => {
  const theme = useTheme();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.timer, { color: theme.colors.primary, fontFamily: theme.fonts.bold }]}>
        {formatTime(timeRemaining)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timer: {
    fontSize: 24,
  },
});

export default TimerComponent;

