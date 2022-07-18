import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { COLORS, SPACING } from '../src/constants/theme';

import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({ restaurant }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const {
    id,
    imageUri,
    title,
    rating,
    genre,
    address,
    description,
    dishes,
    long,
    lag,
    delivery,
    miles,
    minutes,
    votes,
  } = restaurant;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Restaurant', { id: id })}
      style={{
        marginRight: SPACING.md,
        aspectRatio: 3 / 2.5,
        width: 0.8 * width,
        marginTop: SPACING.sm,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.lightgrey,
        shadowColor: COLORS.white,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
        paddingBottom: SPACING.sm,
      }}>
      <ImageBackground
        source={{
          uri: imageUri,
        }}
        style={{ width: '100%', height: '100%', flex: 0.7 }}>
        <View
          style={{
            backgroundColor: COLORS.red,
            padding: SPACING.sm,
            alignSelf: 'flex-start',
            marginTop: SPACING.sm,
            marginLeft: SPACING.sm,
            borderRadius: SPACING.xs,
          }}>
          <Text style={{ color: COLORS.white, fontSize: 17 }}>
            15% off entire menu
          </Text>
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: COLORS.white,
            width: 80,
            alignItems: 'center',
            borderRadius: SPACING.md,
            paddingVertical: SPACING.xs,
            position: 'absolute',
            bottom: -SPACING.sm,
            right: SPACING.sm,
            elevation: 16,
          }}>
          <Text style={{ fontSize: 16, fontWeight: '800' }}>{minutes}</Text>
          <Text style={{ fontSize: 16 }}>min</Text>
        </View>
      </ImageBackground>
      <View style={{ flex: 0.3, marginTop: SPACING.sm, padding: SPACING.xs }}>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name="star" size={20} color={COLORS.lightgreen} />
          <Text style={{ color: COLORS.lightgreen, fontSize: 17 }}>
            {rating}
          </Text>
          <Text
            style={{
              color: COLORS.lightgreen,
              marginHorizontal: SPACING.sm,
              fontSize: 17,
            }}>
            Excellent
          </Text>
          <Text style={{ color: COLORS.lightgrey2, fontSize: 17 }}>
            ({votes})
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 17, color: COLORS.lightgrey2 }}>
            {miles} miles - ${delivery} delivery fee
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
