import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader} from '../../components';
import {img_Plastic} from '../../assets/images';

const Plastic = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto4"
        label4="PLASTIC"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={30} />
      <View style={styles.bgcontainer1}>
        <Text style={styles.heading1}>PLASTIC</Text>
      </View>
      <Gap height={7} />
      <View style={styles.bgcontainer2}>
        <Image source={img_Plastic} style={styles.img} />
        <View style={styles.containerText}>
          <Text style={styles.heading2}>
            Ubah Sampah Plastik Menjadi Kekayaan
          </Text>
          <Text style={styles.heading3}>
            {' '}
            Sampah plastik bisa diubah menjadi kekayaan melalui berbagai cara
            kreatif dan inovatif. Pertama, dengan daur ulang, plastik dapat
            menjadi produk baru seperti botol, tas, atau bahkan bahan bangunan,
            mengurangi penggunaan bahan baku baru dan menghemat sumber daya
            alam.
          </Text>
          <Button
            type="read-more"
            onPress={() => navigation.navigate('RM_Plastic')}
          />
        </View>
      </View>
    </View>
  );
};

export default Plastic;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#FFFEE7',
  },
  bgcontainer1: {
    flexDirection: 'row',
    borderRadius: 8,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 151,
    backgroundColor: '#C3FFAE',
    marginLeft: 30,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgcontainer2: {
    width: 350,
    height: 450,
    borderRadius: 35,
    backgroundColor: '#00FFCB',
    marginLeft: 30,
    marginRight: 29,
    alignItems: 'center',
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    top: 20,
  },
  heading1: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  heading2: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    textAlign: 'center',
  },
  heading3: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    justifyContent: 'center',
    margin: 3.5,
  },
  img: {
    width: 303,
    height: 160,
    top: 15,
  },
});
