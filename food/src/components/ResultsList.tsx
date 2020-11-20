import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  withNavigation,
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import ResultsDetail from './ResultsDetail';

type ResultsListProps = {
  title: string;
  results: any[];
  navigation: any;
};

const ResultsList: React.FC<ResultsListProps> = ({
  title,
  results,
  navigation
}) => {
  const renderBusiness = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Business', { id: item.id })}
      >
        <ResultsDetail result={item} />
      </TouchableOpacity>
    );
  };

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={renderBusiness}
      />
    </View>
  );
};

// wrap our component inside a new component that provides the navigation prop automatically
export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});
