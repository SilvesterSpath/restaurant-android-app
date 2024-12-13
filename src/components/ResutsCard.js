import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ResultsCard = ({ result }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.restaurantName} numberOfLines={2}>
          {result.name}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{result.rating} Stars</Text>
          <Text style={styles.reviewText}>({result.review_count} Reviews)</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.addressText} numberOfLines={2}>
          {result.location.display_address.join(', ')}
        </Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.priceText}>{result.price || 'N/A'}</Text>
        </View>
      </View>
    </View>
  );
};

export default ResultsCard;
