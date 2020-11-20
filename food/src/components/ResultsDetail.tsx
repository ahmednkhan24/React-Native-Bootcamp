import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ResultsDetailProps = {
  result: YelpBusiness;
};

const ResultsDetail: React.FC<ResultsDetailProps> = ({ result }) => {
  const { image_url } = result;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4, // round corners
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold'
  }
});
