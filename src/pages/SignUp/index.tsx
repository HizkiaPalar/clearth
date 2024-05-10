import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Gap, PageHeader, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = {
      fullName: fullName,
      email: email,
      password: password,
    };
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), data);
        showMessage({
          message: 'Registrasi berhasil, silahkan login',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

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
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          value={fullName}
          onChangeText={value => setFullName(value)}
        />
        <Gap height={24} />
        <TextInput
          label="Email"
          placeholder="Type your email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={24} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={32} />
        <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
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
});
