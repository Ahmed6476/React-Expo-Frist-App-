import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Khana Mil Kar Kahey Gay</Header>
      <Paragraph style={styles.baseText}>
        Welcome {'\n'} خوش آمدید
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize:'15px'
  },
  
})