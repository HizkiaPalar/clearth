import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {PageHeader, TextInput, Gap} from '../../components';
import {UserPhoto} from '../../assets/images';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Image} from 'react-native-elements';

const ProfileFormat = ({navigation}) => {
  const [photo, setPhoto] = useState(UserPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
    });

    if (result.didCancel) {
      showMessage({
        message: 'Anda belum memilih foto',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64,${assets.base64}`;
      setPhoto({uri: base64});
      setPhotoForDB(base64);
    }
  };
  const onSubmit = () => {
    const data = {
      fullName: fullName,
      address: address,
      mobileNumber: mobileNumber,
      photo: photoForDB,
    };
    console.log(data);
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
          <TouchableOpacity
            style={styles.changePhotoButton}
            activeOpacity={0.5}
            onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
          </TouchableOpacity>
          <View style={styles.secondContainer}>
            <Gap height={12} />
            <TextInput
              label="Full Name"
              value={fullName}
              onChangeText={value => setFullName(value)}
              placeholder="Enter your name"
            />
            <Gap height={12} />
            <TextInput
              label="Address"
              value={address}
              onChangeText={value => setAddress(value)}
              placeholder="Enter your address"
            />
            <Gap height={12} />
            <TextInput
              label="Mobile Number"
              value={mobileNumber}
              onChangeText={value => setMobileNumber(value)}
              placeholder="Enter your mobile number"
            />
            <View style={styles.thirdContainer}>
              <TouchableOpacity
                style={styles.submitChangeButton}
                onPress={onSubmit}
                onPress={() => navigation.navigate('Profile')}
                onPressIn={() => {
                  showMessage({
                    message: 'Data diperbaharui',
                    type: 'success',
                    duration: 3000,
                  }); 
                }}>
                <Text style={styles.submitChangeText}>Submit change</Text>
              </TouchableOpacity>
            </View>
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
  submitChangeButton: {
    backgroundColor: '#7e7e7e',
    justifyContent: 'center',
    alignItems: 'center',
    width: 337,
    height: 38,
    borderRadius: 15,
    marginTop: 20,
    opacity: 0.8,
  },
  submitChangeText: {
    fontFamily: 'Poppins-Medium',
    color: '#11170F',
  },
  thirdContainer: {
    alignItems: 'center',
  },
  changePhotoButton: {
    backgroundColor: '#FAFCF9',
    borderRadius: 100,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    opacity: 0.75,
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
    width: 393,
    height: 263,
    alignItems: 'center',
    paddingTop: 10,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  sectionOne: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  secondContainer: {
    width: 393,
    height: 490,
    marginTop: 20,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FAFCF9',
    elevation: 10,
    padding: 10,
  },
});
