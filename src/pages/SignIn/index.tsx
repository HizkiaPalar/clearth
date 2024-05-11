import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Gap, PageHeader, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign In" backButton={false} />
      <Gap height={54} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Gap height={26} />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <View style={styles.signupWrapper}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.clickableText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  signInButton: {
    backgroundColor: '#76B85E',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    paddingLeft: 125,
  },
  text: {
    fontSize: 14,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  clickableText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },
});
