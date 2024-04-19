import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Gap, PageHeader, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        type="withPhoto"
        label="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput label="First Name" placeholder="Type your first name" />
        <Gap height={24} />
        <TextInput label="Last Name" placeholder="Type your last name" />
        <Gap height={24} />
        <TextInput
          label="Email or Phone Number"
          placeholder="Type your email or phone number"
        />
        <Gap height={24} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <Gap height={24} />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm password"
          secureTextEntry
        />
        <Gap height={32} />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Gap height={24} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  signUpButton: {
    backgroundColor: '#76B85E',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: -20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginTop: 10,
  },
  socialLoginIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialLoginButtonText: {
    fontSize: 16,
  },
});
