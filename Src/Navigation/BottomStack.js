import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EventRoutes,
  GroupRoutes,
  ContentRoutes,
  CommunityRoutes,
  UserRoutes,
} from './BottomTabRoutes';
import {Images} from '../assets/images';
import {View, Image} from 'react-native';

const Tab = createBottomTabNavigator();
function BottomStack(props) {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Events') {
            iconName = Images.events;
          } else if (route.name === 'Groups') {
            iconName = Images.group;
          } else if (route.name === 'NewContent') {
            iconName = Images.add;
          } else if (route.name === 'Community') {
            iconName = Images.community;
          } else if (route.name === 'User') {
            iconName = Images.user;
          }
          return (
            <>
              <View style={{width: 25, height: 25, marginBottom: 5}}>
                <Image
                  source={iconName}
                  resizeMode="contain"
                  style={{
                    flex: 1,
                    height: undefined,
                    width: undefined,
                    tintColor: focused ? '#fff' : '#333',
                  }}
                />
              </View>
            </>
          );
        },
        tabBarStyle: {
          backgroundColor: '#0F0F0F',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          paddingBottom: 10,
          height: 70,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen name="Events" component={EventRoutes} />
      <Tab.Screen name="Groups" component={GroupRoutes} />
      <Tab.Screen name="NewContent" component={ContentRoutes} />
      <Tab.Screen name="Community" component={CommunityRoutes} />
      <Tab.Screen name="User" component={UserRoutes} />
    </Tab.Navigator>
  );
}

export default BottomStack;
