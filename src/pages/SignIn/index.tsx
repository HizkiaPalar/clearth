import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Gap, PageHeader, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign In" backButton={false} />
      <Gap height={54} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <TextInput label="Email" placeholder="Enter your email" />
        <Gap height={26} />
        <TextInput label="Password" placeholder="Enter your password" />
        <View style={styles.signupWrapper}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.clickableText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('Home')}>
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