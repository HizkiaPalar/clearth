import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Gap, PageHeader, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePressSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleGoogleLogin = () => {
    console.log('Sign in with Google');
  };

  const handleFacebookLogin = () => {
    console.log('Sign in with Facebook');
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withPhoto" label="SignIn" backButton={false} />
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
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.signupWrapper}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={handlePressSignUp}>
            <Text style={styles.clickableText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            style={styles.socialLoginButton}
            onPress={handleGoogleLogin}>
            <Image
              source={require('../../assets/images/google-icon.png')} 
              style={styles.socialLoginIcon}
            />
            <Text style={styles.socialLoginText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialLoginButton}
            onPress={handleFacebookLogin}>
            <Image
              source={require('../../assets/images/facebook-icon.png')} 
              style={styles.socialLoginIcon}
            />
            <Text style={styles.socialLoginText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
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
  socialLoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  socialLoginIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialLoginText: {
    fontSize: 16,
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    paddingLeft: 125,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  clickableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },
});
