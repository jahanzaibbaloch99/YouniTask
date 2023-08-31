import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import TopTabBar from '../../Components/TopTabBar';
import {TabView, SceneMap} from 'react-native-tab-view';
import Explore from './Components/Explore';
import Foryou from './Components/Foryou';

const EventsHome = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Explore'},
    {key: 'second', title: 'For You'},
  ]);
  const ExploreRoute = () => {
    return (
      <View style={{flex: 1}}>
        <Explore />
      </View>
    );
  };

  const ForYouRoute = () => {
    return (
      <View style={{flex: 1}}>
        <Foryou />
      </View>
    );
  };

  const renderScene = SceneMap({
    first: () => ExploreRoute(),
    second: () => ForYouRoute(),
  });
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={{flex: 1}}>
        <TopTabBar
          index={index}
          sceneMap={renderScene}
          setIndex={index => {
            setIndex(index);
          }}
          routes={routes}
          renderLabel={({route, focused, color}) => {
            return (
              <Text
                numberOfLines={1}
                style={{
                  color: focused ? 'white' : '#878787',
                  fontSize: 22,
                  fontWeight: focused ? '500' : '400',
                }}>
                {route.title}
              </Text>
            );
          }}
        />
      </View>
    </View>
  );
};
export default React.memo(EventsHome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    padding: 10,
    paddingVertical: 15,
  },
});
