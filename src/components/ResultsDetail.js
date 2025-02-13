import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Mapping image names to static imports
const imageMapping = {
  burger1: require('../data/images/burger1.jpg'),
  burger2: require('../data/images/burger2.jpg'),
  burger3: require('../data/images/burger3.jpg'),
  burger4: require('../data/images/burger4.jpg'),
  burger5: require('../data/images/burger5.jpg'),
  burger6: require('../data/images/burger6.jpg'),
  pasta1: require('../data/images/pasta1.jpg'),
  pasta2: require('../data/images/pasta2.jpg'),
  pasta4: require('../data/images/pasta4.jpg'),
  pasta3: require('../data/images/pasta3.jpg'),
  pasta5: require('../data/images/pasta5.jpg'),
  pasta6: require('../data/images/pasta6.jpg'),
  pizza1: require('../data/images/pizza1.jpg'),
  pizza2: require('../data/images/pizza2.jpg'),
  pizza3: require('../data/images/pizza3.jpg'),
  pizza4: require('../data/images/pizza4.jpg'),
  pizza5: require('../data/images/pizza5.jpg'),
  pizza6: require('../data/images/pizza6.jpg'),
};

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      {/* Use the image mapping to get the correct image */}
      <Image source={imageMapping[result.image_url]} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 15,
  },
});

export default ResultsDetail;
