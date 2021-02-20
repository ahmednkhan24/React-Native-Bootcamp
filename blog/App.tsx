import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

const screens = {
  Show: ShowScreen,
  Edit: EditScreen,
  Index: IndexScreen,
  Create: CreateScreen
};

const options = {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
};

const navigator = createStackNavigator(screens, options);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
