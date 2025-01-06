import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  return (
    <View>
      <Text>SearchScreen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {error && <Text>{error}</Text>}
      <Text>We have found {results.length} results</Text>
      {/*       {results.map((result) => {
        return <ResultsCard key={result.id} result={result} />;
      })} */}
      <ResultsList results={results} />
      <ResultsList results={results} />
      <ResultsList results={results} />
    </View>
  );
};

export default SearchScreen;
