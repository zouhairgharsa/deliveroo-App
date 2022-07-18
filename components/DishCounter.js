
import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { COLORS, SPACING } from '../src/constants/theme';



const DishCounter = ({ showDishCounter, count, onAdd, onRemove, disabled, }) => {
  return (
    <View>
      {showDishCounter && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign
            disabled={count > 0}
            onPress={onRemove}
            name="minuscircleo"
            size={24}
            color={count ? COLORS.primary : 'grey'}
          />
          <Text style={{ marginHorizontal: SPACING.sm, fontSize: 18 }}>{count}</Text>
          <AntDesign name="pluscircleo" size={24} color={COLORS.primary} onPress={onAdd} />
        </View>
      )}
    </View>
  );
};

export default DishCounter