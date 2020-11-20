import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useBusiness: UseBusiness = (id: string) => {
  const [business, setBusiness] = useState<YelpBusiness | null>(null);

  const getBusiness = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  return business;
};

export default useBusiness;
