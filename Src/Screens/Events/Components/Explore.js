import React, {useEffect} from 'react';
import {View, Text, Vibration} from 'react-native';
import {SceneMap} from 'react-native-tab-view';
import EventList from './EventList';
import TopTabBar from '../../../Components/TopTabBar';
var sceneMap;
const Explore = () => {
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    {key: 1, title: 'The Art'},
    {key: 2, title: 'Community'},
    {key: 3, title: 'All'},
    {key: 4, title: 'Body+Mind'},
    {key: 5, title: 'Party'},
  ]);
  useEffect(() => {
    sceneMap = getSceneMap(routes);
  }, []);
  const getSceneMap = route => {
    let sceneMap = {};
    route.map((item, index) => {
      sceneMap[item.key] = () => {
        return (
          <EventList key={item.key} title={item.title} screen={'Explore'} />
        );
      };
    });
    return sceneMap;
  };

  return (
    <View style={{flex: 1}}>
      <TopTabBar
        index={index}
        sceneMap={SceneMap(getSceneMap(routes))}
        setIndex={index => {
          setIndex(index);
          Vibration.vibrate()
        }}
        routes={routes}
        renderLabel={({route, focused}) => {
          return (
            <View>
              <Text
                style={{
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? 'white' : '#878787',
                  fontSize: focused ? 22 : 14,
                  lineHeight: 22,
                }}>
                {route.title}
              </Text>
              <View style={{height: 1}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'transparent',
                    fontSize: 22,
                  }}>
                  {route.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default React.memo(Explore);
