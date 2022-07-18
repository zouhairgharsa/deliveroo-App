import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING } from '../src/constants/theme';

const BasketButton = ({ dishDataSelected, total }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.md,
        position: 'absolute',
        bottom: 50,
        left: SPACING.xs,
        right: SPACING.xs,
        borderRadius: SPACING.sm,
      }}
      onPress={() => navigation.navigate('Basket', { total: total })}>
      <View
        style={{
          paddingHorizontal: SPACING.md,
          paddingVertical: SPACING.xs,
          borderRadius: SPACING.sm,
          backgroundColor: COLORS.darkblue,
        }}>
        <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
          {dishDataSelected.length}
        </Text>
      </View>
      <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: '600' }}>
        View Basket
      </Text>
      <Text style={{ fontSize: 19, fontWeight: '400', color: COLORS.white }}>
        {' '}
        {total.toFixed(2)} $
      </Text>
    </Pressable>
  );
};

export default BasketButton;
