import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {PageHeader} from '../molecules';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <PageHeader type="withSB" backButton={false} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.tcontainer}>
          <Text style={styles.theader1}>Hey, Riana!</Text>
          <Text style={styles.theader2}>Save our planet, start</Text>
          <Text style={styles.theader3}>sorting your waste </Text>
        </View>
        <View style={styles.weeklyTargetContainer}>
          <Text style={styles.weeklyTarget1}>WEEKLY TARGET</Text>
          <Text style={styles.weeklyTarget2}>300</Text>
          <Text style={styles.weeklyTarget3}>YOUR POINTS</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/Line.png')}
            />
            <Image
              style={styles.image2}
              source={require('../../assets/images/Star.png')}
            />
            <Text style={styles.num}>10/100</Text>
          </View>
        </View>
      </View>
      <View style={styles.bgContainer}>
        <ImageBackground
          style={styles.imageWithText}
          source={require('../../assets/images/bg.png')}>
          <Text style={styles.textImage}>Education</Text>
          <Text style={styles.textImagebottom}>let's learn to be wiser !</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Education')}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={styles.imageWithText}
          source={require('../../assets/images/bg.png')}>
          <Text style={styles.textImage}>Schedule</Text>
          <Text style={styles.textImagebottom}>schedule it so you don't</Text>
          <Text style={styles.textImagebottom}>forget !</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Education')}>
            <Text style={styles.buttonText1}>Add</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={styles.imageWithText}
          source={require('../../assets/images/bg.png')}>
          <Text style={styles.textImage}>Reporting</Text>
          <Text style={styles.textImagebottom}>report illegal trash bins</Text>
          <Text style={styles.textImagebottom}>around you !</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Education')}>
            <Text style={styles.buttonText1}>Report</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tcontainer: {
    marginLeft: 30,
    marginRight: 22,
    marginTop: 34,
  },
  theader1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  theader2: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  theader3: {
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  weeklyTargetContainer: {
    marginTop: 31,
    marginRight: 35,
    backgroundColor: '#51F9D7',
    height: 131,
    width: 141,
    borderRadius: 16,
    marginLeft: 22,
  },
  weeklyTarget1: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  weeklyTarget2: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  weeklyTarget3: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 12,
    textAlign: 'center',
    paddingTop: -5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    marginVertical: 6.5,
    marginHorizontal: 6.5,
  },
  image2: {
    position: 'absolute',
    top: -3,
    left: 15,
  },
  bgContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 180,
  },
  imageWithText: {
    marginBottom: 23,
    width: 350,
    height: 100,
  },
  textImage: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    left: 15,
    top: 4,
  },
  textImagebottom: {
    color: 'grey',
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    left: 15,
    bottom: 3,
  },
  buttonText: {
    borderRadius: 10,
    backgroundColor: '#51F9D7',
    width: 69,
    height: 22,
    textAlign: 'center',
    color: 'black',
    top: 15,
  },
  buttonText1: {
    borderRadius: 10,
    backgroundColor: '#51F9D7',
    width: 69,
    height: 22,
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    left: 14,
  },
  num: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
});

export default Home;
