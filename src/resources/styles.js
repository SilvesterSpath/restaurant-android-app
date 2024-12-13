import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 2,
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1,
  },
  ratingText: {
    fontSize: 16,
    color: '#FF6B6B',
  },
  reviewText: {
    fontSize: 12,
    color: '#888',
  },
  cardBody: {
    marginTop: 5,
  },
  addressText: {
    color: '#555',
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  priceText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default styles;
