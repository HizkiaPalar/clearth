import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {PageHeader} from '../../components/molecules';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <PageHeader type="withPr" backButton={false} />
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
            <Text style={styles.textImagebottom}>
              let's learn to be wiser !
            </Text>
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
            <Text style={styles.textImagebottom}>
              report illegal trash bins
            </Text>
            <Text style={styles.textImagebottom}>around you !</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Education')}>
              <Text style={styles.buttonText1}>Report</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{flex: 1, marginTop: -10}}>
          <View style={styles.tBoxContainer}>
            <Text style={styles.textBox1}>News</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.textBox}>Tittle</Text>
          </View>
          <View style={styles.boxContainer2}>
            <Text style={styles.textBox}>Tittle</Text>
          </View>
          <View style={styles.boxContainer3}>
            <Text style={styles.textBox}>Tittle</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginRight: 20,
    backgroundColor: '#51F9D7',
    height: 131,
    width: 141,
    borderRadius: 16,
    marginLeft: 22,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  boxContainer: {
    marginTop: -80,
    marginRight: 20,
    backgroundColor: '#B0FEB5',
    height: 131,
    width: 141,
    borderRadius: 16,
    marginLeft: 30,
    top: 105,
  },
  tBoxContainer: {
    marginLeft: 30,
    top: 25,
  },
  boxContainer2: {
    marginRight: 35,
    backgroundColor: '#51F9D7',
    height: 131,
    width: 141,
    borderRadius: 16,
    marginLeft: 193,
    marginTop: -26,
  },
  boxContainer3: {
    marginRight: 35,
    backgroundColor: '#B0FEB5',
    height: 131,
    width: 141,
    borderRadius: 16,
    marginLeft: 360,
    top: -131,
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
    marginTop: 25,
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
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderBottomWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  buttonText1: {
    borderRadius: 10,
    backgroundColor: '#51F9D7',
    width: 69,
    height: 22,
    textAlign: 'center',
    color: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderBottomWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  buttonContainer: {
    left: 14,
  },
  textBox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingLeft: 8,
    paddingTop: 7,
    color: 'black',
  },
  textBox1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'black',
  },
  num: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
});

export default Home;
