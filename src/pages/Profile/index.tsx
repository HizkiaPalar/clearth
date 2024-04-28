import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
import {Image} from 'react-native-elements';
import Location from '../../assets/icon/Location.svg';
import Phone from '../../assets/icon/Phone Ringing.svg';

const Profile = () => {
  return (
    <View style={styles.background}>
      <PageHeader type="withPhoto" label="PROFILE" backButton={true} />
      <View style={styles.cardContainer}>
        <View style={styles.card}>
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
              <Phone style={styles.phone}/>
              <Text style={styles.number}>08995531888</Text>
            </View>
          </View>
        </View>
      </View>
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
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    flexDirection: 'row',
    paddingBottom: 119,
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
  },
  locContainer: {
    flexDirection: 'row',
  },
  phoneContainer: {
    flexDirection: 'row',
  }
});
