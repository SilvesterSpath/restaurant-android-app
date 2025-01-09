import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsCard from '../components/ResutsCard';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

/* import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra;

const API_KEY = extra.API_KEY || 'default_api_key';
const CLIENT_ID = extra.CLIENT_ID || 'default_client_id';

console.log('API_KEY:', API_KEY);
console.log('CLIENT_ID:', CLIENT_ID); */

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, error, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {error && <Text>{error}</Text>}
      <Text /* style={{ marginLeft: -180 }} */>
        {' '}
        We have found {results.length} results
      </Text>
      <ScrollView>
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
