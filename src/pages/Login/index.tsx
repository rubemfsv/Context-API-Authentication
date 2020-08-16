import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { useAuth } from '../../contexts/auth';
import { RectButton } from 'react-native-gesture-handler'
// import { FaInstagram, FaTwitter, FaSign } from 'react-icons/fa';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    // flexDirection: 'row',
    marginTop: 40,
    width: '85%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  button: {
    height: 40,
    width: '70%',
    backgroundColor: '#f4511e',
    borderRadius: 15,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  }
});

const LogIn: React.FC = () => {
  const { loged, user, logIn } = useAuth();

  console.log(loged);
  console.log(user);

  function handleLogIn() {
    logIn();
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Username"
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <RectButton onPress={handleLogIn} style={styles.button} >
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default LogIn;