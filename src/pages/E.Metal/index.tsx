import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';

const Metal = ({navigation}) => {
  return (
    <View>
      <PageHeader
        type="withPhoto5"
        label5="Metal"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Text>Metal</Text>
    </View>
  );
};

export default Metal;

const styles = StyleSheet.create({});
