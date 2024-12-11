import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name='search1' color='black' style={styles.icon} />
      <TextInput placeholder='Search' style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 15, // Add space around the icon
    fontSize: 35,
    alignSelf: 'center', // Vertically center the icon
  },
  input: {
    flex: 1, // Allow input to take remaining space
    fontSize: 18,
    /*     borderColor: 'black',
    borderWidth: 1, */
  },
});

export default SearchBar;
