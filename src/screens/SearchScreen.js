import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

/* import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra;

const API_KEY = extra.API_KEY || 'default_api_key';
const CLIENT_ID = extra.CLIENT_ID || 'default_client_id';

console.log('API_KEY:', API_KEY);
console.log('CLIENT_ID:', CLIENT_ID); */

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const seachApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 20,
        term,
        location: 'new york',
      },
    });
    setResults(response.data.businesses);
  };

  useEffect(() => {
    seachApi();
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term was submitted')}
      />
      <Text>SearchScreen</Text>
      <Text>We have found {results.length} results</Text>
      {results.map((result) => {
        return <Text key={result.id}>{result.name}</Text>;
      })}
    </View>
  );
};

export default SearchScreen;
