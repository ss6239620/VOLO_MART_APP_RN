import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import React, { useEffect, useState, useRef } from 'react'

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(0)).current

  // useEffect(() => {
    // setTimeout(() => {
    //   setAnimating(false);
    //   navigation.navigate("Auth");
    // }, 5000)
  // }, [])

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
    ]).start();
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate("Auth");
    }, 5000)
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ scale: slideAnim }] }]}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.logoText}>Volo Mart</Text>
      </Animated.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95f23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 16,

  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
});