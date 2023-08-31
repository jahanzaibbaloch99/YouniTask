import React, {useEffect} from 'react';
import {View, Text, Vibration} from 'react-native';
import {SceneMap} from 'react-native-tab-view';
import TopTabBar from '../../../Components/TopTabBar';
import EventList from './EventList';

var sceneMap;
const Foryou = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'All'},
    {key: 2, title: 'My Interests'},
    {key: 3, title: 'My Groups'},
    {key: 4, title: 'My Community'},
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
          <EventList key={item.key} title={item.title} screen={'For You'} />
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
          Vibration.vibrate();
        }}
        routes={routes}
        renderLabel={({route, focused}) => {
          return (
            <View
              style={{
                backgroundColor: focused ? 'white' : 'black',
                padding: 10,
                paddingHorizontal: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                borderWidth: 0.5,
                borderColor: 'white',
              }}>
              <Text
                style={{
                  color: focused ? 'black' : 'white',
                  fontSize: 16,
                  lineHeight: 25,
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

export default React.memo(Foryou);
