import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>
        <AntDesign name='search1' size={24} color='black' /> Search Bar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,

    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
