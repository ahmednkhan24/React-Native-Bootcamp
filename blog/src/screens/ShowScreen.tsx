import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

type ShowScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const ShowScreen: any = ({ navigation }: any) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const blogPost = state.find((post: BlogPost) => post.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
