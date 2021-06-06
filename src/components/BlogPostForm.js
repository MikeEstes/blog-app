// Import Dependencies
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Create component
const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.headerStyle}>Enter Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styles.headerStyle}>Enter Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  );
};

// Automatically set default values
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

// Create Stylesheet
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});

// Export Component
export default BlogPostForm;
