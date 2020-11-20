import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useBusinesses from '../hooks/useBusinesses';

const SearchScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getBusinesses, businesses, errorMessage] = useBusinesses();

  const filterBusinessesByPrice = (dollarSigns: string) => {
    return businesses.filter(
      (business: YelpBusiness) => business.price === dollarSigns
    );
  };

  return (
    // prevent content from going beyond the usable height/width of the screen
    <>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => getBusinesses(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterBusinessesByPrice('$')}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterBusinessesByPrice('$$')}
        />
        <ResultsList
          title="Big Spender"
          results={filterBusinessesByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
