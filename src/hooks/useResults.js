import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi there!');
    /*     try {
      const response = await yelp.get('/search', {
        params: {
          limit: 20,
          term: searchTerm,
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
    } */
  };

  // Call searchApi when component mounts
  // Bad code!
  // searchApi('pasta');

  useEffect(() => {
    searchApi('burger');
  }, []);

  return [results, error, searchApi];
};
