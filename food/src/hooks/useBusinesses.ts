import { useState } from 'react';
import yelp from '../api/yelp';

export default (searchTerm: string) => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      console.log(`fetching '${searchTerm}' businesses...`);
      const response: YelpSearch = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Skokie'
        }
      });

      const {
        data: { businesses }
      } = response as any;

      setBusinesses(businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };

  return [businesses, searchApi, errorMessage];
};
