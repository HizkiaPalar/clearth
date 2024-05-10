import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Gap, PageHeader} from '../../components';
import {
  Leafes,
  FoodWaste,
  Plastic,
  BrokenGlass,
  Metals,
} from '../../assets/images';

const Education = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto2"
        label2="EDUCATION"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={60} />
      <Text style={styles.heading1}>CATEGORIES</Text>
      <Gap height={6} />
      <View style={styles.bgcontainer1}>
        <Text style={styles.heading2}>ORGANIC</Text>
      </View>
      <Gap height={7} />
      <View style={styles.bgcontainer2}>
        <Gap height={17} />
        <TouchableOpacity onPress={() => navigation.navigate('NatureWaste')}>
          <View style={styles.bgcontainer3}>
            <Image source={Leafes} style={styles.image1} />
            <Text style={styles.heading3}> Nature Waste </Text>
          </View>
        </TouchableOpacity>
        <Gap height={5} />
        <TouchableOpacity onPress={() => navigation.navigate('FoodWaste')}>
          <View style={styles.bgcontainer3}>
            <Image source={FoodWaste} style={styles.image2} />
            <Text style={styles.heading3}> Food Waste </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Gap height={50} />
      <View style={styles.bg2container1}>
        <Text style={styles.heading2}>NON ORGANIC</Text>
      </View>
      <Gap height={7} />
      <View style={styles.bg2container2}>
        <Gap height={17} />
        <TouchableOpacity onPress={() => navigation.navigate('Plastic')}>
          <View style={styles.bgcontainer3}>
            <Image source={Plastic} style={styles.image1} />
            <Text style={styles.heading3_2}> Plastic </Text>
          </View>
        </TouchableOpacity>
        <Gap height={5} />
        <TouchableOpacity onPress={() => navigation.navigate('Glass')}>
          <View style={styles.bgcontainer3}>
            <Image source={BrokenGlass} style={styles.image2} />
            <Text style={styles.heading3_2}> Glass </Text>
          </View>
        </TouchableOpacity>
        <Gap height={5} />
        <TouchableOpacity onPress={() => navigation.navigate('Metal')}>
          <View style={styles.bgcontainer3}>
            <Image source={Metals} style={styles.image3} />
            <Text style={styles.heading3_2}> Metal </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#FFFEE7',
  },
  heading1: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    marginLeft: 30,
  },
  heading2: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    paddingLeft: 15,
  },
  heading3: {
    fontSize: 20,
    fontFamily: 'Poppins-Italic',
    color: '#000000',
    paddingLeft: 35,
  },
  heading3_2: {
    fontSize: 20,
    fontFamily: 'Poppins-Italic',
    color: '#000000',
    paddingLeft: 60,
  },
  bgcontainer1: {
    flexDirection: 'row',
    borderRadius: 8,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 120,
    backgroundColor: '#C3FFAE',
    marginLeft: 30,
    height: 39,
    alignItems: 'center',
  },
  bg2container1: {
    flexDirection: 'row',
    borderRadius: 8,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 161,
    backgroundColor: '#C3FFAE',
    marginLeft: 30,
    height: 39,
    alignItems: 'center',
  },
  bgcontainer2: {
    width: 350,
    height: 170,
    borderRadius: 10,
    borderBottomWidth: 6,
    borderRightWidth: 0.01,
    borderLeftWidth: 0.01,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    backgroundColor: '#00FFCB',
    marginLeft: 30,
    marginRight: 29,
  },
  bg2container2: {
    width: 350,
    height: 230,
    borderRadius: 10,
    borderBottomWidth: 6,
    borderRightWidth: 0.01,
    borderLeftWidth: 0.01,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    backgroundColor: '#00FFCB',
    marginLeft: 30,
    marginRight: 29,
  },
  bgcontainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 28,
    marginTop: 5,
    width: 300,
    height: 50,
    borderRadius: 18,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  image1: {
    width: 40,
    height: 45,
    marginLeft: 4,
  },
  image2: {
    width: 50,
    height: 55,
  },
  image3: {
    width: 50,
    height: 70,
  },
});

export default Education;
