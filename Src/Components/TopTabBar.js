import * as React from 'react';
import {useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

export default function TopTabBar({
  routes,
  index,
  setIndex,
  sceneMap,
  renderLabel,
}) {
  const layout = useWindowDimensions();
  const _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        renderLabel={renderLabel}
        scrollEnabled
        lab
        indicatorStyle={{backgroundColor: 'transparent', padding: 0, margin: 0}}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={{backgroundColor: '#0F0F0F', padding: 0, margin: 0}}
        tabStyle={{
          width: 'auto',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}
        bounces
      />
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={sceneMap}
      onIndexChange={setIndex}
      renderTabBar={_renderTabBar}
      initialLayout={{width: layout.width}}
      lazy
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  },
  tabItem: {
    alignItems: 'center',
    padding: 15,
  },
});
