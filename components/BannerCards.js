import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import { COLORS, SPACING } from '../src/constants/theme';
const bannerCards = [
  {
    id: 0,
    image:
      'https://f.roocdn.com/images/onsite_messages/286070/onsite-message-image.jpg',
  },
  {
    id: 1,
    image:
      'https://f.roocdn.com/images/onsite_messages/381859/onsite-message-image.jpg',
  },
  {
    id: 2,
    image:
      'https://f.roocdn.com/images/onsite_messages/502931/onsite-message-image.jpg',
  },
  {
    id: 3,
    image:
      'https://f.roocdn.com/images/onsite_messages/286070/onsite-message-image.jpg',
  },
];

export const BannerCards = () => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={bannerCards}
      contentContainerStyle={{ marginTop: SPACING.xl, marginLeft: SPACING.sm }}
      renderItem={({ item }) => (
        <View
          style={{
            width: 0.95 * width,
            height: 180,
            marginRight: SPACING.sm,
          }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </View>
      )}
    />
  );
};

export default BannerCards;
