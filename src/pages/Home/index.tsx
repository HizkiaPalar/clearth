import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, PageHeader} from '../../components';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <PageHeader
        type="withPhoto"
        label="Home"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.styleB}>
        <Button
          label="Education"
          onPress={() => navigation.navigate('Education')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  styleB: {
    alignItems: 'center',
  },
});

export default Home;
