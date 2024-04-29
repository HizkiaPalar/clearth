/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';
import {Calendar} from 'react-native-calendars';
import PlusSign from '../../assets/icon/PlusSign.svg';
import ToggleOn from '../../assets/icon/ToggleOn.svg';
import ToggleOff from '../../assets/icon/ToggleOff.svg';
import Pencil from '../../assets/icon/Pencil.svg';
import Trash from '../../assets/icon/Trash.svg';
import VerticalLine from '../../assets/icon/VerticalLine.svg';

const Schedule = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader
        type="withPhoto"
        label="Schedule"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.calendarText}>Calendar</Text>
        <View style={styles.calendarStyle}>
          <Calendar
            style={styles.calendarAppearance}
            theme={{
              backgroundColor: '#63C427',
              calendarBackground: '#C3FFAE',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#000000',
            }}
            markingType={'custom'}
            markedDates={{
              '2024-05-01': {customStyles: {text: {color: 'red'}}},
              '2024-05-05': {customStyles: {text: {color: 'red'}}},
              '2024-05-07': {
                customStyles: {
                  container: {backgroundColor: '#84d856', elevation: 2},
                  text: {color: '#488020'},
                },
              },
              '2024-05-09': {customStyles: {text: {color: 'red'}}},
              '2024-05-12': {customStyles: {text: {color: 'red'}}},
              '2024-05-18': {
                customStyles: {
                  container: {backgroundColor: '#84d856', elevation: 2},
                  text: {color: '#488020'},
                },
              },
              '2024-05-19': {customStyles: {text: {color: 'red'}}},
              '2024-05-23': {customStyles: {text: {color: 'red'}}},
              '2024-05-26': {customStyles: {text: {color: 'red'}}},
            }}
          />
        </View>
        <View style={styles.containerscheduleall}>
          <View style={styles.todayScheduleContainer}>
            <Text style={styles.todayScheduleText}>TODAY'S SCHEDULE</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddSchedule')}>
              <View style={styles.plus}>
                <PlusSign />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.Schedule1}>
            <View style={styles.timeAndDo}>
              <Text style={styles.time}>07:00</Text>
              <Text style={styles.do}>Buang Sampah</Text>
            </View>
            <View style={styles.scheduleAction}>
              <TouchableOpacity style={styles.ToggleStyle}>
                <ToggleOn />
              </TouchableOpacity>
              <TouchableOpacity>
                <Pencil />
              </TouchableOpacity>
              <VerticalLine style={styles.verticalLineStyle} />
              <TouchableOpacity>
                <Trash />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Schedule1}>
            <View style={styles.timeAndDo}>
              <Text style={styles.time}>16:00</Text>
              <Text style={styles.do}>Memilah sampah</Text>
            </View>
            <View style={styles.scheduleAction}>
              <TouchableOpacity style={styles.ToggleStyle}>
                <ToggleOff />
              </TouchableOpacity>
              <TouchableOpacity>
                <Pencil />
              </TouchableOpacity>
              <VerticalLine style={styles.verticalLineStyle} />
              <TouchableOpacity>
                <Trash />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Schedule1}>
            <View style={styles.timeAndDo}>
              <Text style={styles.time}>20:30</Text>
              <Text style={styles.do}>Belajar konten edukasi</Text>
            </View>
            <View style={styles.scheduleAction}>
              <TouchableOpacity style={styles.ToggleStyle}>
                <ToggleOff />
              </TouchableOpacity>
              <TouchableOpacity>
                <Pencil />
              </TouchableOpacity>
              <VerticalLine style={styles.verticalLineStyle} />
              <TouchableOpacity>
                <Trash />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEDC',
    height: '100%',
  },
  calendarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleText: {
    marginLeft: 77,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  calendarText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 30,
    marginLeft: 20,
    color: 'black',
  },
  calendarAppearance: {
    borderColor: '#C3FFAE',
    borderRadius: 20,
    height: 370,
    width: 333,
    marginTop: 5,
    marginHorizontal: 9,
  },
  containerscheduleall: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayScheduleContainer: {
    flexDirection: 'row',
    marginTop: 67,
    width: '100%',
    alignItems: 'center',
    marginLeft: 60,
  },
  todayScheduleText: {
    marginRight: 75,
    fontSize: 20,
    color: 'black',
  },
  Schedule1: {
    width: 333,
    height: 102,
    backgroundColor: '#C3FFAE',
    borderRadius: 15,
    marginHorizontal: 9,
    marginTop: 7,
    paddingLeft: 15,
    paddingBottom: 20,
    elevation: 4,
    marginBottom: 10,
  },
  timeAndDo: {
    flexDirection: 'row',
  },
  time: {
    fontSize: 50,
    color: 'black',
  },
  do: {
    fontSize: 15,
    color: 'black',
    marginTop: 8,
    marginLeft: 30,
  },
  scheduleAction: {
    flexDirection: 'row',
  },
  ToggleStyle: {
    marginRight: 189,
    marginTop: -5,
  },
  verticalLineStyle: {
    marginHorizontal: 5,
  },
  plus: {
    paddingLeft: 45,
  },
});
