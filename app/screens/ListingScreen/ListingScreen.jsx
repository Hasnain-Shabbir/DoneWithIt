import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ActivityIndicator, Card, ApiError, Screen } from '../../components';
import colors from '../../config/colors';
import listingsApi from '../../api/listings';
import routes from '../../navigation/routes';
import { useApi } from '../../hooks';

const ListingScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <ApiError
            errorMessage="Coudn't retrieve the listings."
            title="Retry"
            onPress={loadListings}
          />
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
