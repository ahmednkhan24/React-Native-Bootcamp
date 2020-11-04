import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';

const SearchScreen: React.FC = () => {
  console.log('SearchScreen rerender');
  const [searchTerm, setSearchTerm] = useState('');
  const [businesses, searchApi, errorMessage] = useBusinesses(searchTerm);

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
