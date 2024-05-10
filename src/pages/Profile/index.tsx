import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
import {Image} from 'react-native-elements';
import Location from '../../assets/icon/Location.svg';
import Phone from '../../assets/icon/Phone Ringing.svg';

const Profile = ({navigation}) => {
  return (
    <View style={styles.background}>
      <PageHeader type="withPhoto" label="PROFILE" backButton={true} onPress={() => navigation.goBack()}/>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.sectionOne}>
            <Image
              source={require('../../assets/images/ProfilePic.png')}
              style={styles.profilePic}
            />
            <View>
              <Text style={styles.greet}>Hey, Riana!</Text>
              <View style={styles.locContainer}>
                <Location style={styles.location} />
                <Text style={styles.locText}>Manado, Sulawesi Utara</Text>
              </View>
              <View style={styles.phoneContainer}>
                <Phone style={styles.phone} />
                <Text style={styles.number}>08995531888</Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionTwo}>
            <TouchableOpacity
              style={styles.changeDataButton}
              onPress={() => navigation.navigate('ProfileFormat')}>
              <Text style={styles.changeDataText}>Change Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.changePassButton}>
              <Text style={styles.changePassText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.logOutButton}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFEE7',
    flex: 1,
    fontFamily: 'Poppins-Medium',
  },
  greet: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 25,
    marginLeft: 10,
    marginTop: 18,
  },
  card: {
    backgroundColor: '#62FAD1',
    width: 333,
    height: 233,
    borderRadius: 15,
    paddingBottom: 119,
    elevation: 10,
  },
  cardContainer: {
    alignItems: 'center',
    paddingTop: 75,
  },
  profilePic: {
    width: 98,
    height: 96,
    marginLeft: 14,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 50,
  },
  location: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  phone: {
    marginLeft: 10,
    width: 20,
    height: 20,
    marginTop: 4,
  },
  locText: {
    marginLeft: 4,
    color: '#000000',
    fontSize: 15,
  },
  number: {
    marginLeft: 4,
    color: '#000000',
    fontSize: 15,
    marginTop: 3,
  },
  locContainer: {
    flexDirection: 'row',
  },
  phoneContainer: {
    flexDirection: 'row',
  },
  changeDataButton: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: 137,
    height: 38,
    borderRadius: 15,
    opacity: 0.75,
  },
  changePassButton: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: 196,
    height: 38,
    borderRadius: 15,
    marginTop: 6,
    opacity: 0.75,
  },
  sectionOne: {
    flexDirection: 'row',
  },
  sectionTwo: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  changeDataText: {
    color: '#000000',
    fontSize: 15,
    paddingLeft: 16,
    fontFamily: 'Poppins-Medium',
  },
  changePassText: {
    color: '#000000',
    fontSize: 15,
    paddingLeft: 16,
    fontFamily: 'Poppins-Medium',
  },
  logOutText: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
  },
  logOutButton: {
    paddingTop: 259,
    paddingLeft: 43,
  },
});
