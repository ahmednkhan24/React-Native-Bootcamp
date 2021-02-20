import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

type EditScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const EditScreen: any = ({ navigation }: any) => {
  const { state, editBlogPost }: Context = useContext(BlogContext);

  const id = navigation.getParam('id');
  const blogPost = state.find((post: BlogPost) => post.id === id);
  const { title, content }: any = blogPost;

  return (
    <View>
      <BlogForm
        initialTitle={title}
        initialContent={content}
        submitText="Edit Blog Post"
        onSubmit={(title, content) =>
          editBlogPost(id, title, content, () => navigation.pop())
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
