import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessScreen from './src/screens/BusinessScreen';

const screens = {
  Search: SearchScreen,
  Business: BusinessScreen
};

const options = {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
};

const navigator = createStackNavigator(screens, options);

export default createAppContainer(navigator);
