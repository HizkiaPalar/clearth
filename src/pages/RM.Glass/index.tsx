import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, PageHeader, Gap} from '../../components';

const RM_Glass = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto5"
        label5="GLASS"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={76} />
      <View>
        <View style={styles.bgcontainer}>
          <ScrollView>
            <Text style={styles.heading1}>
              {'   '}
              Sampah kaca yang sering dianggap sebagai limbah tak berguna, dapat
              diubah menjadi berkah melalui berbagai cara kreatif dan inovatif.
              Pertama, dengan daur ulang, kaca bisa dijadikan produk baru
              seperti botol, toples, gelas, dan bahan bangunan, mengurangi
              penggunaan bahan baku baru, hemat sumber daya alam, serta
              mengurangi emisi gas rumah kaca dan polusi udara.
              {'\n  '}Kedua, melalui upcycling, sampah kaca bisa diubah menjadi
              produk bernilai tinggi seperti lampu hias, vas bunga, atau
              dekorasi rumah unik, membuka peluang usaha baru bagi pengrajin dan
              pengusaha kreatif. Ketiga, dalam seni dan kerajinan, pecahan kaca
              dapat dijadikan mosaik, lukisan kaca, atau karya seni lainnya yang
              indah dan bernilai, memperluas keterampilan dan lapangan kerja di
              bidang seni dan kerajinan.
              {'\n  '}Keempat, sebagai agregat bangunan, kaca yang dihancurkan
              dapat digunakan dalam campuran beton dan aspal dengan keunggulan
              lebih ringan, kuat, dan tahan lama. Kelima, kaca yang digiling
              halus dapat digunakan sebagai bahan abrasif dan pasir silika untuk
              berbagai keperluan industri. Dengan menerapkan cara-cara ini, kita
              dapat mengubah sampah kaca menjadi produk bermanfaat, mengurangi
              pencemaran lingkungan, menciptakan lapangan pekerjaan, dan
              membangun masa depan yang lebih berkelanjutan. Mari bersama-sama
              ubah sampah kaca menjadi berkah dan ciptakan lingkungan yang lebih
              lestari!
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

export default RM_Glass;

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
