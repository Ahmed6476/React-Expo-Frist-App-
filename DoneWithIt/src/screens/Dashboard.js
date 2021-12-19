
import React, { useState } from 'react'
import Background from '../components/Background'
import { fathernameValidator } from '../helpers/fathernameValidator'
import { nameValidator } from '../helpers/nameValidator'
import { cnicValidator } from '../helpers/cnicValidator'
import { birthdateValidator } from '../helpers/birthdateValidator'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

export default function Dashboard({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [fathername, setFatherName] = useState({ value: '', error: '' })
  const [cnic, setCnic] = useState({ value: '', error: '' })
  const [birthdate, setBirthDate] = useState({ value: '', error: '' })

  const onSubmit = () => {
    const nameError = nameValidator(name.value)
    const fathernameError = fathernameValidator(fathername.value)
    const cnicError = cnicValidator(cnic.value)
    const birthdateError = birthdateValidator(birthdate.value)
 
    if (nameError||fathernameError||cnicError||birthdateError) {
      setName({ ...name, error: nameError })
      setFatherName({...fathername, error:fathernameError})
      setCnic({...cnic, error:cnicError})
      setBirthDate({...birthdate, error:birthdateError})
   
      return
    }
    navigation.navigate('RequestScreen')
  }
  return (
    <Background>
      <Logo />
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button> */}
      <Header>Let’s start</Header>
      <Paragraph style={styles.baseText}>
       Fill your correct information to proceed 
       {'\n'}
       آگے بڑھنے کے لیے اپنی درست معلومات پُر کریں۔
      </Paragraph>
      <TextInput
          label="Your Name"
          value={name.value}
          onChangeText={text => setName({ value: text, error: '' })}
          // style={styles.input}
          error={!!name.error}
          errorText={name.error}
          
        />
        <TextInput
          label="Father Name"
          value={fathername.value}
          onChangeText={text => setFatherName({ value: text, error: '' })}
          // style={styles.input}
          error={!!fathername.error}
          errorText={fathername.error}
          
        />
        <TextInput
          label="CNIC No"
          value={cnic.value}
          onChangeText={text => setCnic({ value: text, error: '' })}
          // style={styles.input}
          
          error={!!cnic.error}
          errorText={cnic.error}
          
        />
        <TextInput
          label="Date Of Birth"
          keyboardType = 'numeric'
          value={birthdate.value}
          onChangeText={text => setBirthDate({ value: text, error: '' })}
          error={!!birthdate.error}
          errorText={birthdate.error}
          
          // style={styles.input}
          
        />
     <Button
        mode="outlined"
        onPress={onSubmit}
      >
        Submit
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