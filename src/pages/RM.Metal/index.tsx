import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, PageHeader, Gap} from '../../components';

const RM_Metal = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto5"
        label5="Metal"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={76} />
      <View>
        <View style={styles.bgcontainer}>
          <ScrollView>
            <Text style={styles.heading1}>
              {'   '}
              Besi bekas yang sering dianggap sebagai limbah tak berguna, dapat
              diubah menjadi harta karun melalui berbagai cara kreatif dan
              inovatif. Pertama, dengan daur ulang, besi bekas dapat dijadikan
              berbagai produk baru seperti mobil, mesin, peralatan rumah tangga,
              dan bahan bangunan, mengurangi penggunaan bijih besi baru, hemat
              sumber daya alam, dan energi, serta mengurangi emisi gas rumah
              kaca dan polusi udara.
              {'\n  '}Kedua, melalui upcycling, besi bekas dapat diubah menjadi
              produk dengan nilai tambah seperti furnitur, dekorasi rumah, atau
              karya seni unik, membuka peluang usaha baru bagi pengrajin dan
              pengusaha kreatif. Ketiga, dalam seni dan kerajinan, besi bekas
              dapat dimanfaatkan untuk membuat patung, dekorasi taman, dan karya
              seni lainnya yang indah dan bernilai, mengembangkan keterampilan
              serta menghasilkan produk dengan nilai estetika dan ekonomi.
              {'\n  '}Keempat, besi bekas dapat dijual ke tempat daur ulang
              skrap logam untuk mendapatkan uang, dengan harga bervariasi
              tergantung jenis dan kualitas besi. Kelima, besi bekas yang masih
              baik dapat didonasikan ke organisasi amal atau lembaga sosial
              untuk membantu masyarakat yang membutuhkan, membangun
              infrastruktur atau memenuhi kebutuhan lain yang bermanfaat. Dengan
              menerapkan cara-cara ini, kita dapat mengubah sampah besi bekas
              menjadi produk yang bermanfaat, mengurangi pencemaran lingkungan
              dan emisi gas rumah kaca, menciptakan lapangan pekerjaan,
              mendorong ekonomi kreatif, dan membangun masa depan yang lebih
              berkelanjutan. Mari bersama-sama ubah besi bekas menjadi harta
              karun dan ciptakan lingkungan yang lebih lestari!
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

export default RM_Metal;

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
