import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResutsCard from './ResutsCard';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  /*   console.log(JSON.stringify(results, null, 2)); */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/*       {results &&
        results.map((item) => {
          return <ResutsCard result={item} key={item.id} />;
        })} */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          /* return <ResutsCard result={item} />; */
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
