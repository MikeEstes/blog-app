// Import Dependencies
import React, { useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// Create component
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.rowStyle}>
                <Text style={styles.titleStyle}>
                  {item.title} - {item.id}
                </Text>
                <Text style={styles.contentStyle}>{item.content}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.deleteIconStyle} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// Add icon to header
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather style={styles.createIconStyle} name='plus' />
      </TouchableOpacity>
    ),
  };
};

// Create Stylesheet
const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  titleStyle: {
    fontSize: 18,
  },
  contentStyle: {
    fontSize: 14,
  },
  createIconStyle: {
    fontSize: 30,
    marginRight: 10,
  },
  deleteIconStyle: {
    fontSize: 24,
  },
});

// Export Component
export default IndexScreen;
