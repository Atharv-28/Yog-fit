import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground,ScrollView} from 'react-native';

const CreateAccount= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (

    <ImageBackground source={{
        uri: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      }} style={styles.background}>

         <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 20,
        
        }}
      >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Please enter your details</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Date Of Birth"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Weight"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Height"
        />



        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
       
        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={styles.or}>or</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Login</Text>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
height:"100%",
width:"100%"
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  input: {
    width:350,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  or: {
    fontSize: 18,
    marginVertical: 20,
  },
  googleButton: {
    width: 350,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signup: {
    fontSize: 16,
  },
  signupLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default CreateAccount;
