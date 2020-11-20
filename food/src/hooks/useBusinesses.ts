import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useBusinesses: UseBusinesses = () => {
  const [businesses, setBusinesses] = useState<YelpBusiness[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getBusinesses = async (term: string) => {
    try {
      const params = {
        limit: 50,
        term,
        location: 'Skokie'
      };

      const response: any = await yelp.get('/search', { params });

      const {
        data: { businesses }
      } = response;

      setBusinesses(businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };

  // run an initial search once when component is first rendered
  useEffect(() => {
    getBusinesses('pasta');
  }, []);

  return [getBusinesses, businesses, errorMessage];
};

export default useBusinesses;
