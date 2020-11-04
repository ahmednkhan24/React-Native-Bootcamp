import axios from 'axios';
import { YELP_API_URI } from '../constants';

export default axios.create({
  baseURL: YELP_API_URI,
  headers: {
    Authorization:
      'Bearer bLCWuZd9DTNE9kNJ3hDn6QFbEJ_TRcQpr6kKomaa5Ja9klVC64vaBcp2MZyGr1ohp4lHqoV9XKqc-DzFg5x5ClQDP_q-93sXpF7PFK5YshmAWi6tHYQ_XR3MNIDOWnYx'
  }
});
