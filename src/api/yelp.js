import axios from 'axios';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra;

const API_KEY = extra.API_KEY || 'default_api_key';
const CLIENT_ID = extra.CLIENT_ID || 'default_client_id';

console.log('API_KEY:', API_KEY);
console.log('CLIENT_ID:', CLIENT_ID);

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
