import React from 'react';
import { View, Text, Image } from 'react-native';
import {COLORS,SPACING} from  '../src/constants/theme'
const CategoryCard = ({item}) => {
    const { imageUri, background, type } = item;

  const IMAGE_SIZE=100
  return (
    <View style={{ backgroundColor: background, marginRight: SPACING.sm, borderRadius: SPACING.xs,alignSelf:'flex-start' }}>
      <Image
        source={{
          uri: imageUri,
        }}
        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          position: 'absolute',
          bottom: SPACING.sm,
          left: SPACING.xs,
          elevation:16
        }}>
        {type}
      </Text>
    </View>
  );
};

export default CategoryCard;
