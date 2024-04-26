import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
import {Calendar} from 'react-native-calendars';

const Schedule = ({navigation}) => {
  return (
    <View>
      <PageHeader
        type="withPhoto"
        label="Schedule"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>CALENDER</Text>
          <Calendar style={styles.calender} />
        </View>
        <View>
          <Text style={styles.text}>TODAY'S SCHEDULE</Text>
        </View>
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEDC',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    paddingTop: 60,
    paddingLeft: 32,
  },
  calender: {
    margin: 4,
    marginLeft: 30,
    marginRight: 30,
    elevation: 4,
  },
});
