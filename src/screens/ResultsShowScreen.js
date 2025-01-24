import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
