import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {PageHeader} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <PageHeader
        type="withSB"
        backButton={false} // Adjust back button visibility
      />
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={require('../../assets/images/Cards .png')} // Replace with your image
              style={styles.image}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}> Title </Text>
            <Text style={styles.cardDescription}>
              This is a brief description of the content in Card 1. It can
              include key points or a summary.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={require('../../assets/images/Cards .png')} // Replace with your image
              style={styles.image}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}> Title </Text>
            <Text style={styles.cardDescription}>
              This is a brief description of the content in Card 2. You can
              tailor it to your specific information.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={require('../../assets/images/Cards .png')} // Replace with your image
              style={styles.image}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}> Title </Text>
            <Text style={styles.cardDescription}>
              Fill in the content for Card 3 here, keeping it concise and
              informative.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={require('../../assets/images/Cards .png')} // Replace with your image
              style={styles.image}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}> Title </Text>
            <Text style={styles.cardDescription}>
              Create a compelling description for Card 4, grabbing the reader's
              attention.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute cards evenly within row
    marginBottom: 20, // Add spacing between rows
  },
  card: {
    backgroundColor: '#ffffff',
    width: 167,
    height: 'auto',
    borderWidth: 1,
    borderRadius: 21,
    borderColor: 'black',
  },
  cardImage: {
    height: 97,
    width: 167,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444444',
  },
});

export default Home;
