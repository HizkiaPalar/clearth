import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Gap } from '../../components'; // Menghapus PageHeader dari import
import { Sum } from '../../assets/images';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

const Addphoto = () => {
  const [photo, setPhoto] = useState(Sum);

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 233,
      maxWidth: 300,
      quality: 10,
      includeBase64: true,
    });

    if (result.didCancel) {
      showMessage({
        message: 'Upss, anda harus memilih foto',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64,${assets.base64}`;
      setPhoto({ uri: base64 });
    }
    console.log(base64)
  };

  return (
    <View style={styles.container}>
      <Gap height={58} />
      <TouchableOpacity activeOpacity={0.7} onPress={getImage}>
        <Image source={photo} style={styles.image} />
      </TouchableOpacity>
      <Gap height={30} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  button: {
    width: 119,
    height: 39,
    borderRadius: 25,
    backgroundColor: '#63C427',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Addphoto;
