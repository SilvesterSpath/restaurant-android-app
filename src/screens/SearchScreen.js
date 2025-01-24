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
    <>
      <View style={styles.searchBarContainer}>
        <SearchBar
          style={styles.searchBar}
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => console.log('Search API Call')}
        />
      </View>

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
    </>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  scrollContent: {
    paddingBottom: 20, // Ensure there's padding at the bottom for visibility
  },
});

export default SearchScreen;
