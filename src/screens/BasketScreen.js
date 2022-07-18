import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SPACING } from '../constants/theme';


const Fee = ({ feeName, feePrice }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>{feeName}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
        }}>
        <Ionicons
          name="information-circle-outline"
          size={24}
          color={COLORS.black}
          style={{ marginRight: SPACING.xs, paddingTop: SPACING.xs }}
        />
        <Text style={{ fontSize: 20 }}>${feePrice}</Text>
      </View>
    </View>
  );
};

export default function BasketScreen({ route, navigation }) {
  const { total } = route.params;
  const percentagePrice = (total * 15) / 100;
  const subtotal = total - percentagePrice;
  const totalFees = 3.99 + 2.99 + 0.65;
  return (
    <View style={{ flex: 1, marginHorizontal: SPACING.sm, paddingTop: 2 * SPACING.xl }}>
      <View style={{ marginBottom: SPACING.xl }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.black }}>Your Order :</Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.black }}>
          Total Price : {(subtotal + totalFees).toFixed(2)}$
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Subtotal</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="pricetag-outline" size={24} color={COLORS.red} />
              <Text style={{ color: COLORS.lightgrey2, fontSize: 16 }}>
                15 % off ({percentagePrice.toFixed(2)} $ )
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 20 }}>{subtotal.toFixed(2)}</Text>
        </View>
      </View>
      <View style={{ marginTop: SPACING.xl }}>
        <Fee feeName={'Delivery fee'} feePrice={3.99} />
        <Fee feeName={'Service fee'} feePrice={2.49} />
        <Fee feeName={'Single-use carrier bags'} feePrice={0.65} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{
          height: 50,
          borderRadius: SPACING.sm,
          backgroundColor: COLORS.primary,
          marginTop: SPACING.xl,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.white }}>
          Go to checkout
        </Text>
      </Pressable>
    </View>
  );
}
