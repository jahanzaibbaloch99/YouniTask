import React, {useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Images} from '../../../assets/images';
import UIText from '../../../Components/UIText';
import moment from 'moment';
const EventCard = ({
  title,
  tags,
  attendes,
  onCalendarPress,
  startDate,
  endDate,
}) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <View style={styles.imageView}>
          <Image source={Images.heroImage} style={styles.imageStyle} />
          <View style={styles.innerImageView}>
            <Image source={Images.titleImage} style={styles.imageStyle} />
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 10}}>
            <UIText>{moment(startDate).format('ll')}</UIText>
          </View>
          <View>
            <UIText>
              {moment(startDate).format('LT')} - {moment(endDate).format('LT')}
            </UIText>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <View>
            <UIText style={styles.titleText}>{title}</UIText>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          {tags?.map((e, i) => {
            return (
              <View key={i} style={styles.tagContainer}>
                <UIText>{e}</UIText>
              </View>
            );
          })}
        </View>
      </View>
      <View style={{marginVertical: 15, flex: 1, flexDirection: 'row'}}>
        <View style={styles.attendesContainer}>
          {attendes?.map((x, i) => {
            return (
              <View
                key={i}
                style={[styles.attendeImage, {left: i > 0 && i * 15}]}>
                <Image
                  style={[
                    styles.imageStyle,
                    {borderRadius: 50, overflow: 'hidden'},
                  ]}
                  source={x.image}
                />
              </View>
            );
          })}
          <View style={styles.countContainer}>
            <View style={styles.countView}>
              <UIText style={{fontSize: 12}}>+12k</UIText>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              onCalendarPress();
            }}>
            <View style={{height: 30, width: 30}}>
              <Image
                style={styles.imageStyle}
                resizeMode="contain"
                source={Images.heartcolor}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default EventCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  titleText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  tagContainer: {
    padding: 7,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 10,
  },
  imageView: {
    height: 330,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  innerImageView: {
    height: 75,
    width: 75,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  attendeImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    padding: 2,
    backgroundColor: 'white',
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  attendesContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    left: 60,
    backgroundColor: '#fff',
    padding: 2,
  },
  countView: {
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#BC61F5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
