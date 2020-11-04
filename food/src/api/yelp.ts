import axios from 'axios';
import { YELP_API_URI } from '../constants';

export default axios.create({
  baseURL: YELP_API_URI,
  headers: {
    Authorization:
      'Bearer XXX'
  }
});
