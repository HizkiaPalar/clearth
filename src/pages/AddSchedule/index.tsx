import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {PageHeader} from '../../components';
import {Arrow, Min, Plus} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Buang sampah', value: '1'},
  {label: 'Memilah Sampah', value: '2'},
  {label: 'Belajar konten edukasi', value: '3'},
];

const AddSchedule = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <PageHeader
        type="withPhoto"
        label="Schedule"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.containerbox}>
        <View style={styles.containerbox2}>
          <View style={styles.containerbox3}>
            <Text style={styles.text1}>00 : 00</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.containerbox4}>
            <Text style={styles.text2}>ADD DESCRIPTION</Text>
            <View style={styles.add}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select description' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View style={styles.containerbox4}>
            <Text style={styles.text2}>REMINDS BEFORE</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.minutes}>
                <View style={styles.minutes2}>
                  <Image source={Min} style={styles.image1} />
                  <View>
                    <Text style={styles.text3}>30</Text>
                    <View style={styles.linetext} />
                  </View>
                  <Image source={Plus} style={styles.image1} />
                </View>
                <View style={styles.containerbox3}>
                  <Text style={styles.text5}>MINUTES</Text>
                </View>
              </View>
              <View style={styles.containerbutton}>
                <TouchableOpacity>
                  <Text style={styles.text4}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddSchedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEDC',
    height: '100%',
  },
  containerbox: {
    alignItems: 'center',
    marginTop: 47,
  },
  containerbox2: {
    backgroundColor: '#C3FFAE',
    height: 360,
    width: 333,
    borderRadius: 15,
  },
  text1: {
    fontSize: 70,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  line: {
    color: 'black',
    height: 2,
    width: 333,
    backgroundColor: 'black',
  },
  text2: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  containerbox3: {
    alignItems: 'center',
  },
  containerbox4: {
    paddingLeft: 15,
    paddingTop: 28,
  },
  add: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingTop: 10,
  },
  minutes: {
    width: 91,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  minutes2: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 5,
  },
  text3: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 20,
    paddingLeft: 3,
  },
  image1: {
    width: 15,
    height: 15,
    marginTop: 3,
  },
  linetext: {
    color: 'black',
    height: 1,
    width: 32,
    backgroundColor: 'black',
  },
  text5: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 10,
    paddingTop: 6,
  },
  containerbutton: {
    height: 54,
    width: 122,
    backgroundColor: '#63C427',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 15,
  },
  text4: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
