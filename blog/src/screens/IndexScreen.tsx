import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

type IndexScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const IndexScreen: any = ({ navigation }: IndexScreenProps) => {
  const { state, deleteBlogPost }: any = useContext(BlogContext);

  const renderPost = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Show', { id: item.id })}
      >
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.title} - {item.id}
          </Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather style={styles.icon} name="trash" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={({ title }) => title}
        renderItem={renderPost}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', // get each item to render on the same row
    justifyContent: 'space-between', // add space in between everything within view
    paddingVertical: 20, // spacing above and below each blog post
    paddingHorizontal: 10, // keep the sides of each post from hugging the screen
    // border to distinguish each blog post
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    // title for each blog post
    fontSize: 18
  },
  icon: {
    // delete icon for each blog post
    fontSize: 24
  }
});

export default IndexScreen;
