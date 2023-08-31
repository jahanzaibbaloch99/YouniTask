import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import ApiServices from '../../../Services/ApiServices';
import EventCard from './EventCard';
import RNCalendarEvents from 'react-native-calendar-events';
import UIText from '../../../Components/UIText';
import FallbackComponent from '../../../Components/FallbackComponent';
import Toast from 'react-native-simple-toast';
const EventList = ({title, screen}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (screen == 'Explore') {
      ApiServices.getEventData(title).then(e => {
        setIsLoading(false);
        setData(e);
      });
    } else {
      ApiServices.getForyouData(title).then(e => {
        setIsLoading(false);
        setData(e);
      });
    }
  }, []);
  const onCalendarPress = (title, startDate, endDate) => {
    RNCalendarEvents.saveEvent(title, {
      startDate: startDate,
      endDate: endDate,
    })
      .then(e => {
        Toast.showWithGravity(
          'Calender Event Created.',
          Toast.LONG,
          Toast.BOTTOM,
        );
      })
      .catch(e => {
        Toast.showWithGravity(
          'Something Went Wrong Please Try Again Later',
          Toast.LONG,
          Toast.BOTTOM,
        );
      });
  };
  return (
    <View style={styles.container}>
      {isLoading && data.length < 1 ? (
        <View style={styles.innerContainer}>
          <ActivityIndicator color={'white'} size={'small'} />
        </View>
      ) : !isLoading && data.length < 1 ? (
        <FallbackComponent text={`No Event Available Right now in ${title}`} />
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={styles.cardContainer}>
                <EventCard
                  startDate={item.startDate}
                  endDate={item.endDate}
                  id={item.id}
                  title={item.title}
                  tags={item.tags}
                  attendes={item.attendes}
                  onCalendarPress={() => {
                    onCalendarPress(item.title, item.startDate, item.endDate);
                  }}
                />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  container: {flex: 1, backgroundColor: '#0F0F0F'},
  tagContainer: {
    padding: 7,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 10,
  },
  innerContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
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
