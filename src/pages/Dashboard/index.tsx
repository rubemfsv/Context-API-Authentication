import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { RectButton } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeview: {
    marginBottom: 85,
  },
  text: {
    color: '#f4511e',
    fontSize: 23,
    padding: 3,
  },
  username: {
    color: '#f4511e',
    fontSize: 23,
    lineHeight: 30,
    fontWeight: "bold"
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

const Dashboard: React.FC = () => {
  const { logOut, user } = useAuth();

  function handleLogOut() {
    logOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeview}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.username}>{user?.name}.</Text>
        <Text style={styles.text}>Welcome!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <RectButton onPress={handleLogOut} style={styles.button} >
          <Text style={styles.buttonText}>Log out</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Dashboard;