import React from 'react';
import NavigationStack from './Src/Navigation/NavigationStack';
import RNCalendarEvents from 'react-native-calendar-events';

const App = () => {
  React.useEffect(() => {
    RNCalendarEvents.requestPermissions((readOnly = false)).then(e => {
      console.log(e, 'Eee');
    });
  }, []);
  return (
    <>
      <NavigationStack />
    </>
  );
};
export default App;
