// Import Dependencies
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

// Create component
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text style={styles.titleStyle}>{blogPost.title}</Text>
      <Text style={styles.contentStyle}>{blogPost.content}</Text>
    </View>
  );
};

// Add icon to header
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }>
        <EvilIcons style={styles.editIconStyle} name='pencil' />
      </TouchableOpacity>
    ),
  };
};

// Create Stylesheet
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
  },
  contentStyle: {
    fontSize: 14,
  },
  editIconStyle: {
    fontSize: 35,
    marginRight: 10,
  },
});

// Export Component
export default ShowScreen;
