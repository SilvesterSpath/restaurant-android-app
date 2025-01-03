import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsCard from '../components/ResutsCard';

/* import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra;

const API_KEY = extra.API_KEY || 'default_api_key';
const CLIENT_ID = extra.CLIENT_ID || 'default_client_id';

console.log('API_KEY:', API_KEY);
console.log('CLIENT_ID:', CLIENT_ID); */

const SearchScreen = () => {
  const [term, setTerm] = useState('pizza');

  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const seachApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 20,
          term,
          location: 'boston',
        },
      });
      setResults(response.data.businesses);
      setError('');
    } catch (error) {
      // Handle the error
      console.error('Error fetching Yelp data:', error);

      // Optional: Set an error state
      setError('Could not fetch results. Please try again.');

      // Optional: Set results to an empty array
      setResults([]);
    }
  };

  useEffect(() => {
    seachApi();
  }, []);

  return (
    <View>
      <Text>SearchScreen</Text>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={seachApi} />

      {error && <Text>{error}</Text>}
      <Text>We have found {results.length} results</Text>
      {results.map((result) => {
        return <ResultsCard key={result.id} result={result} />;
      })}
    </View>
  );
};

export default SearchScreen;
