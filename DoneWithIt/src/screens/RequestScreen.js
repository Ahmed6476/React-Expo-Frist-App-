
import React, { useState } from 'react'
import Background from '../components/Background'
import { Text } from 'react-native-paper'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

export default function RequestScreen({ navigation }) {
 


  return (
    <Background>
      <Logo />
      <Text>Your Request is Pending please check after 30 min{'\n'} آپ کی درخواست زیر التوا ہے براہ کرم 30 منٹ کے بعد چیک کریں۔</Text>
       <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
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