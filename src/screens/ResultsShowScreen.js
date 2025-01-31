import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from '../data/data.json';
import ResultsCard from '../components/ResutsCard';
import ResultsDetail from '../components/ResultsDetail';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const filterResultsById = (id) => {
    return data.filter((item) => item.id === id);
  };

  const result = filterResultsById(id)[0];
  console.log('ResultsShow result:', result);

  return (
    <View>
      <Text>ResultsShowScreen</Text>
      <Text>{id}</Text>
      <ResultsDetail result={result} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
