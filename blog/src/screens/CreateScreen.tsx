import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

type CreateScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const CreateScreen: React.FC<CreateScreenProps> = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <BlogForm
        initialTitle=""
        initialContent=""
        submitText="Add Blog Post"
        onSubmit={(title, content) =>
          addBlogPost(title, content, () => navigation.navigate('Index'))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
