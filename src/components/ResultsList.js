import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResutsCard from './ResutsCard';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/*       {results &&
        results.map((item) => {
          return <ResutsCard result={item} key={item.id} />;
        })} */}
      <Text>Results: {results.length}</Text>
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
