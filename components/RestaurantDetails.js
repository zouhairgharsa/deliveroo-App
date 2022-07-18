import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { COLORS, SPACING } from '../src/constants/theme';

const RestaurantDetails = ({ title, minutes, rating, miles, delivery }) => {
  return (
    <View style={{ marginHorizontal: SPACING.sm }}>
      <View style={{ marginTop: SPACING.xs }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '800',
            lineHeight: 36,
            color: COLORS.black,
          }}>
          {title}
        </Text>
        <Text style={{ fontSize: 18, color: COLORS.black, lineHeight: 26 }}>
          {minutes} min ·Sushi ·Healthy ·Asian
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SPACING.xs,
          }}>
          <Entypo name="star" size={20} color={COLORS.lightgreen} />
          <Text
            style={{ color: COLORS.lightgreen, marginLeft: SPACING.xs, fontSize: 18 }}>
            {rating}
          </Text>
          <Text
            style={{
              color: COLORS.lightgreen,
              marginHorizontal: SPACING.sm,
              fontSize: 18,
            }}>
            Excellent
          </Text>
          <Text style={{ fontSize: 18 }}>{miles} miles</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SPACING.xs,
          }}>
          <Text style={{ fontSize: 18, color: COLORS.lightgrey2 }}>
            ${delivery} delivery
          </Text>
          <Text
            style={{
              marginHorizontal: SPACING.sm,
              fontSize: 18,
              color: COLORS.lightgrey2,
            }}>
            $7.00 minimum
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{
            uri: 'https://clever-knuth-2dabed.netlify.app/assets/delivery.png',
          }}
          style={{ width: 55, height: 55, resizeMode: 'contain' }}
        />
        <Text style={{ marginLeft: SPACING.sm, fontSize: 18 }}>
          Deliver in {minutes} min{' '}
        </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={{ color: COLORS.primary, fontSize: 18 }}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantDetails;
