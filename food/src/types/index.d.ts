declare type YelpBusiness = {
  id: string;
  name: string;
  price: string;
  image_url: string;
  rating: number;
  review_count: number;
  photos: string[];
};

declare type UseBusiness = (id: string) => YelpBusiness | null;

declare type UseBusinesses = () => [
  (term: string) => void,
  YelpBusiness[],
  string
];
