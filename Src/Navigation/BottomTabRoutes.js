import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventsHome} from '../Screens/Events';
import ComingSoon from '../Screens/ComingSoon';
const EventStack = createNativeStackNavigator();
const GroupStack = createNativeStackNavigator();
const ContentStack = createNativeStackNavigator();
const CommunityStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const EventRoutes = () => {
  return (
    <EventStack.Navigator screenOptions={{headerShown: false}}>
      <EventStack.Screen name="EventsHome" component={EventsHome} />
    </EventStack.Navigator>
  );
};

const GroupRoutes = () => {
  return (
    <GroupStack.Navigator screenOptions={{headerShown: false}}>
      <GroupStack.Screen name="ComingSoon" component={ComingSoon} />
    </GroupStack.Navigator>
  );
};
const ContentRoutes = () => {
  return (
    <ContentStack.Navigator screenOptions={{headerShown: false}}>
      <ContentStack.Screen name="ComingSoon" component={ComingSoon} />
    </ContentStack.Navigator>
  );
};
const CommunityRoutes = () => {
  return (
    <CommunityStack.Navigator screenOptions={{headerShown: false}}>
      <CommunityStack.Screen name="ComingSoon" component={ComingSoon} />
    </CommunityStack.Navigator>
  );
};
const UserRoutes = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen name="ComingSoon" component={ComingSoon} />
    </UserStack.Navigator>
  );
};
export {EventRoutes, GroupRoutes, ContentRoutes, CommunityRoutes, UserRoutes};
