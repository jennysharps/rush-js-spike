import {MobileHomeComponent} from '@dynamo/mobile-home';
import {MobilePaymentsComponent} from '@dynamo/mobile-payments';
import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';

const HomeRoute = () => <MobileHomeComponent />;

const PaymentsRoute = () => <MobilePaymentsComponent />;

const SupportRoute = () => null;

const barStyle = {backgroundColor: '#ffffff'};

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'payments', title: 'Payments'},
    {key: 'support', title: 'Support'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    payments: PaymentsRoute,
    support: SupportRoute,
  });

  return (
    <BottomNavigation
      barStyle={barStyle}
      activeColor="#065dbb"
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
