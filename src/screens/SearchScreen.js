import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import data from '../data/data.json';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const filterResultsByPrice = (price) => {
    return data.filter((item) => item.price === price);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.searchBarContainer}>
        <SearchBar
          style={styles.searchBar}
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => console.log('Search API Call')}
        />
      </View>

      <Text style={styles.resultsText}>
        We have found {data.length} results
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='CostEffective'
        />
        <ResultsList results={filterResultsByPrice('$$')} title='BitPricier' />
        <ResultsList results={filterResultsByPrice('$$$')} title='BigSpender' />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title='Extravagant'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
  },
  searchBarContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  resultsText: {
    marginLeft: 10,
    marginBottom: 5,
  },
  scrollContent: {
    paddingBottom: 20, // Ensure there's padding at the bottom for visibility
  },
});

export default SearchScreen;
