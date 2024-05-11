import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {PageHeader, TextInput} from '../../components';
import {Location, Phone} from '../../assets/icon';
import {UserPhoto} from '../../assets/images';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const ProfileFormat = ({navigation}) => {
  const [photo, setPhoto] = useState(UserPhoto);

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
    });

    if (result.didCancel) {
      showMessage({
        message: 'Ups',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64,${assets.base64}`;
      setPhoto({uri: base64});
    }
  };

  return (
    <View style={styles.background}>
      <PageHeader
        type="withPhoto"
        label="PROFILE"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.sectionOne}>
            <TouchableOpacity
              style={styles.changePhotoButton}
              activeOpacity={0.5}
              onPress={getImage}>
              <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionTwo}>
            <TouchableOpacity style={styles.changeDataButton}>
              <Text style={styles.changeDataText}>Submit Data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileFormat;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFEE7',
    flex: 1,
    fontFamily: 'Poppins-Medium',
  },
  changePhotoButton: {
    borderStyle: 'dashed',
    borderRadius: 100,
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
    width: 194,
    height: 188,
    borderWidth: 1,
    borderRadius: 100,
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
    alignItems: 'center',
    width: 137,
    height: 38,
    borderRadius: 15,
    opacity: 0.75,
    marginLeft: 169,
    marginTop: 50,
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
    alignItems: 'center',
    marginTop: 23,
  },
  sectionTwo: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  changeDataText: {
    color: '#000000',
    fontSize: 15,
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
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});
