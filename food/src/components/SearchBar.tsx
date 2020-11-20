import React, { SetStateAction } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SEARCH } from '../constants';

type SearchBarProps = {
  term: string;
  onTermChange: React.Dispatch<SetStateAction<string>>;
  onTermSubmit: React.Dispatch<SetStateAction<any>>;
};

const SearchBar: React.FC<SearchBarProps> = ({
  term,
  onTermChange,
  onTermSubmit
}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder={SEARCH}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10, // prevent search bar from hugging the top part of the screen
    backgroundColor: '#EDEBEB', // grey background color of search bar
    height: 50, // height from top of search bar to bottom of search bar
    borderRadius: 5, // rounded corners of search bar
    marginHorizontal: 15, // keeps the left and right of search bar from hugging the sides
    flexDirection: 'row', // keep search icon and search bar on same line
    marginBottom: 10 // prevent search bar from hugging the bottom part of the screen
  },
  iconStyle: {
    fontSize: 35, // make icon size larger
    alignSelf: 'center', // keep icon in the center of it's area
    marginHorizontal: 15 // add extra space to the left and right of the icon
  },
  inputStyle: {
    flex: 1, // have search area take up the full width and height of the search bar container
    fontSize: 18 // text size of the search area (text and placeholder)
  }
});
