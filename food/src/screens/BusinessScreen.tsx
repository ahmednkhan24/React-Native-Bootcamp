import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import useBusiness from '../hooks/useBusiness';

type BusinessScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const BusinessScreen: React.FC<BusinessScreenProps> = ({ navigation }) => {
  const id = navigation.getParam('id');
  const business = useBusiness(id);

  if (!business) {
    return null;
  }

  const renderImage = ({ item }: any) => {
    return <Image source={{ uri: item }} style={styles.imageStyle} />;
  };

  return (
    <View>
      <Text style={styles.textStyle}>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photoUrl) => photoUrl}
        renderItem={renderImage}
      />
    </View>
  );
};

export default BusinessScreen;

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    marginBottom: 10
  },
  textStyle: {
    margin: 10
  }
});
