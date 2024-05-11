import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { PageHeader, Gap } from '../../components';
const Addphoto = () => {
  return (
      <View>
        <PageHeader type="withPhoto" backButton={true} label="REPORTING" />
        <Gap height={58} />
        <View style={styles.containerAdd}>
        <Image
            source={require('../../assets/images/Sum.png')}
            style={styles.addSum}
          />
        </View>
        <Gap height={30} />
          <View style={styles.Post}>
            <Text style = {styles.pt}>POST</Text>
          </View>
    </View>
  )
}

export default Addphoto

const styles = StyleSheet.create({
    containerAdd : {
        width : 333,
        height : 233,
        backgroundColor : "#57F9D4",
        left  : 50,
        borderRadius : 15,
        
    },
    addSum:{
        left : 135,
        top : 90,

    },
    Post:{
      width : 119,
      height : 39 ,
      borderRadius : 25,
      backgroundColor : '#63C427',
      left : 50,
    },
    pt:{
        left : 32,
        top : 5,
        fontFamily : 'Poppins-Bold',
        color : "#FFFFFF",
        fontSize : 20,
    }
})