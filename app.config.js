import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    API_KEY: process.env.API_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
  },
});
