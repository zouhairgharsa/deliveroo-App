import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { restaurants, categories } from '../constants/data';
import { SPACING } from '../constants/theme';
import Constants from 'expo-constants';

import {
  HeaderHome,
  CategoryCard,
  BannerCards,
  SectionList,
  RestaurantCard,
} from '../../components';
const HomeScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingTop: Constants.statusBarHeight,
      }}>
      <HeaderHome />
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: SPACING.sm }}
        horizontal
        data={categories}
        renderItem={({ item }) => <CategoryCard item={item} />}
      />
      <BannerCards />
      <FlatList
        data={restaurants}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          marginTop: SPACING.xl,
          marginLeft: SPACING.sm,
        }}
        renderItem={({ item }) => (
          <View>
            <SectionList title={item.categories}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginTop: SPACING.md }}
                data={item.contents}
                horizontal
                renderItem={({ item }) => <RestaurantCard restaurant={item} />}
              />
            </SectionList>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
