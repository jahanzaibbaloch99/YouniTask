import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Images} from '../assets/images';

const CustomHeader = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.headerText}>Events</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View>
          <View style={styles.imageView}>
            <Image source={Images.heart} style={styles.image} />
          </View>
        </View>
        <View>
          <View style={styles.imageView}>
            <Image source={Images.search} style={styles.image} />
          </View>
        </View>
        <View>
          <View style={styles.imageView}>
            <Image source={Images.menu} style={styles.image} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CustomHeader;
const styles = StyleSheet.create({
  image: {flex: 1, height: undefined, width: undefined},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageView: {height: 24, width: 24},
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'space-between',
  },
  titleContainer: {flex: 1},
});
