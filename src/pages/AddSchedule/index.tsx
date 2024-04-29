import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';

const AddSchedule = ({navigation}) => {
  return (
    <View>
      <PageHeader
        type="withPhoto"
        label="Schedule"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Text>Add Schedule2</Text>
    </View>
  );
};

export default AddSchedule;

const styles = StyleSheet.create({});
