import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image
        source={require('../assets/haven-of-hope-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: theme.colors.primary, fontFamily: theme.fonts.bold }]}>
        HAVEN OF HOPE ACADEMY
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.text, fontFamily: theme.fonts.regular }]}>
        Mathematical Quiz Challenge
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={[styles.buttonText, { color: theme.colors.background, fontFamily: theme.fonts.bold }]}>
          Start Quiz
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
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

export default HomeScreen;

