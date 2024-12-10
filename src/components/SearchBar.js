import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <AntDesign name='search1' size={24} color='black' style={styles.icon} />
      <TextInput placeholder='Search' style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center', // Vertically center icon and input
  },
  icon: {
    marginHorizontal: 10, // Add space around the icon
  },
  input: {
    flex: 1, // Allow input to take remaining space
    marginRight: 10, // Prevent text from touching the edge
  },
});

export default SearchBar;
