import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {Button, PageHeader, Gap} from '../../components';

const RM_FoodWaste = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto3"
        label3="FOOD WASTE"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={76} />
      <View>
        <View style={styles.bgcontainer}>
          <ScrollView>
            <Text style={styles.heading1}>
              {'   '}
              Mengubah sampah sisa makanan menjadi berkah dapat dilakukan
              melalui beberapa cara yang efektif. Pertama, dengan mengompos,
              dimana sisa makanan dicampur dengan bahan organik lain untuk
              membuat kompos yang berguna bagi pertumbuhan tanaman.
              {'\n '}Kedua, sisa makanan tertentu dapat diolah menjadi pakan
              ternak, mengurangi limbah dan biaya pakan. Selanjutnya, donasi
              sisa makanan yang masih baik ke lembaga sosial membantu mereka
              yang membutuhkan. Kemudian, dengan kreativitas dalam memasak, sisa
              makanan dapat diubah menjadi hidangan baru yang lezat.
              {'\n '}Terakhir, dengan mengolah beberapa sisa makanan menjadi
              pupuk, kita dapat meningkatkan kesuburan tanah dan pertumbuhan
              tanaman secara alami. Melalui langkah-langkah ini, kita dapat
              mengubah sampah menjadi sesuatu yang memberi manfaat bagi diri
              kita sendiri, orang lain, dan juga lingkungan.
            </Text>
            <View style={styles.bgcontainer2}>
              <Button
                type="white-button"
                label="done"
                onPress={() => navigation.navigate('Education')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RM_FoodWaste;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#FFFEE7',
  },
  img: {
    width: '100%',
    height: 750,
  },
  bgcontainer: {
    width: 350,
    height: 550,
    borderRadius: 35,
    backgroundColor: '#00FFCB',
    left: 30,
    right: 29,
    alignItems: 'center',
  },
  bgcontainer2: {
    bottom: 15,
    left: 100,
  },
  heading1: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    padding: 13,
    margin: 0.1,
    textAlign: 'justify',
  },
});
