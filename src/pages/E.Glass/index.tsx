import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader} from '../../components';
import {img_Glass} from '../../assets/images';

const Glass = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto5"
        label5="GLASS"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={30} />
      <View style={styles.bgcontainer1}>
        <Text style={styles.heading1}>GLASS</Text>
      </View>
      <Gap height={7} />
      <View style={styles.bgcontainer2}>
        <Image source={img_Glass} style={styles.img} />
        <View style={styles.containerText}>
          <Text style={styles.heading2}>
            Sampah Gelas/Kaca: Dari Limbah Menjadi Berkah
          </Text>
          <Text style={styles.heading3}>
            Sampah kaca yang sering dianggap sebagai limbah tak berguna, dapat
            diubah menjadi berkah melalui berbagai cara kreatif dan inovatif.
            Pertama, dengan daur ulang,
          </Text>
          <Button
            type="white-button"
            label="Read More"
            onPress={() => navigation.navigate('RM_Glass')}
          />
        </View>
      </View>
    </View>
  );
};

export default Glass;

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
    margin: 3,
  },
  heading3: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    justifyContent: 'center',
    margin: 7,
  },
  img: {
    width: 303,
    height: 160,
    top: 15,
  },
});
