import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../src/constants/theme';

import React from 'react';
const Gradients = ({ dish, onSelect }) => {
  const { name, description, price, imageDish } = dish;
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: COLORS.lightgrey,
        padding: SPACING.xs,
        alignItems: 'center',
      }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            color: 'black',
            lineHeight: 32,
          }}>
          {name}
        </Text>
        <Text style={{ lineHeight: 20, fontSize: 18 }} numberOfLines={2}>
          {description}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>$ {price}</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          padding: SPACING.xs,
          borderColor: 'lightgrey',
        }}>
        <Image
          source={{
            uri: imageDish,
          }}
          style={{ width: 80, height: 80 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Gradients;
