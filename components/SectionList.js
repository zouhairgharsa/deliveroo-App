import * as React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, SPACING } from '../src/constants/theme';

export default function SectionList({ children, title }) {
  return (
    <View style={{ marginBottom: SPACING.xl }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, fontWeight: '800' }}>{title}</Text>
        <AntDesign name="arrowright" size={24} color={COLORS.primary} />
      </View>
      {children}
    </View>
  );
}