import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, PageHeader, Gap} from '../../components';

const RM_Plastic = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <PageHeader
        type="withPhoto4"
        label4="PLASTIC"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={76} />
      <View>
        <View style={styles.bgcontainer}>
          <ScrollView>
            <Text style={styles.heading1}>
              {'  '}
              Sampah plastik bisa diubah menjadi kekayaan melalui berbagai cara
              kreatif dan inovatif. Pertama, dengan daur ulang, plastik dapat
              menjadi produk baru seperti botol, tas, atau bahkan bahan
              bangunan, mengurangi penggunaan bahan baku baru dan menghemat
              sumber daya alam.
              {'\n '} Selain itu, dengan upcycling, sampah plastik dapat diubah
              menjadi produk bernilai tinggi seperti tas, dompet, atau dekorasi
              rumah yang unik. Plastik juga dapat dikonversi menjadi energi
              melalui proses pirolisis atau gasifikasi, menghasilkan bahan bakar
              atau gas untuk pembangkit listrik atau keperluan industri.
              {'\n'} Di samping itu, dengan memanfaatkan kreativitas, plastik
              dapat dijadikan karya seni, kerajinan tangan, atau dekorasi yang
              indah. Selain itu, meningkatkan edukasi dan kesadaran masyarakat
              tentang pengelolaan sampah plastik yang bertanggung jawab juga
              membuka peluang bisnis baru dalam bidang edukasi, pelatihan, dan
              konsultasi. Dengan mengimplementasikan cara-cara ini, kita tidak
              hanya mengubah sampah plastik menjadi kekayaan, tetapi juga
              memberikan kontribusi positif dalam menjaga kelestarian lingkungan
              dan membangun masa depan yang lebih berkelanjutan.
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

export default RM_Plastic;

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
