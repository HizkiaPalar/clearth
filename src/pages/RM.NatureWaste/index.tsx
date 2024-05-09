import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {background_img} from '../../assets/images';
import {Button, PageHeader} from '../../components';

const RM_NatureWaste = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto3"
        label3="NATURE WASTE"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View>
        <Image source={background_img} style={styles.img} />
        <View style={styles.bgcontainer}>
          <ScrollView>
            <Text style={styles.heading1}>
              {'   '}
              Sampah daun tak perlu dibuang sia-sia. Di baliknya tersembunyi
              kekayaan yang dapat diolah menjadi berbagai produk bermanfaat.
              Pupuk kompos, kerajinan tangan, pakan ternak, teh herbal, dan
              biogas adalah beberapa contohnya.
              {'\n  '}Pupuk kompos dari daun kering kaya akan nutrisi untuk
              menyuburkan tanaman. Daun-daun kering yang indah dapat diubah
              menjadi kerajinan tangan unik dan menarik. Daun-daun tertentu,
              seperti daun singkong dan daun pepaya, dapat diolah menjadi pakan
              ternak kaya protein. Daun-daun berkhasiat obat, seperti daun mint,
              daun sirsak, dan daun kelor, dapat diracik menjadi teh herbal
              menyehatkan. Sampah daun kering pun dapat difermentasi menjadi
              biogas, sumber energi terbarukan ramah lingkungan untuk memasak,
              penerangan, dan pemanasan.
              {'\n  '}Dengan kreativitas, ketekunan, dan strategi yang tepat,
              sampah daun dapat menjadi sumber penghasilan berlimpah dan
              bermanfaat bagi lingkungan. Pelajari jenis daun yang tepat, jaga
              kualitasnya, kembangkan kreativitas, bangun jaringan, dan
              perhatikan aspek keberlanjutan. Ingat, peluang untuk mengubah
              sampah daun menjadi kekayaan tidak terbatas. Teruslah berinovasi
              dan temukan cara-cara kreatif lainnya untuk memanfaatkan sumber
              daya alam ini secara berkelanjutan.
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

export default RM_NatureWaste;

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
    bottom: 670,
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
  },
});
