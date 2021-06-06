// Import Dependencies
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

// Create component
const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { editBlogPost, state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => navigation.pop())
      }
    />
  );
};

// Create Stylesheet
const styles = StyleSheet.create({});

// Export Component
export default EditScreen;
