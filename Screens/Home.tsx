import Layout from '../Components/Layout';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
const img1 = require('../assets/home-img-1.png');
const img2 = require('../assets/home-img-2.png');
const img3 = require('../assets/home-img-3.png');
const img4 = require('../assets/home-img-4.png');


const data = [
  {
    img: img1,
    text: 'Send Parcel',
    link: '',
  },
  {
    img: img2,
    text: 'Recieve Parcel',
    link: '',
  },
  {
    img: img3,
    text: 'Release Parcel',
    link: '',
  },
  {
    img: img4,
    text: 'Emergency Drop-off',
    link: '',
  },
];

const Home: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScrollView>
      <Layout innerContainerStyle={styles.innerContainer}>
        {/* image container */}
        <View style={styles.imgContainer}>
          {data.slice(0, 2).map((item, i) => {
            return (
              <View style={styles.imgInnerContainer} key={i}>
                <Image source={item.img} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.imgContainer}>
          {data.slice(2, 4).map((item, i) => {
            return (
              <View style={styles.imgInnerContainer} key={i}>
                <Image source={item.img} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </Layout>
     
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: '25%',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
    marginTop: '2%',
  },
  imgInnerContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
});
