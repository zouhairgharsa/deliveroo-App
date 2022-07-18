import * as React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { COLORS, SPACING } from '../src/constants/theme';
const HeaderHome = () => {
  const IMAGE_SIZE = 60;
  return (
    <View style={{ marginBottom: SPACING.lg, marginHorizontal: SPACING.md }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SPACING.sm,
        }}>
        <Image
          source={{
            uri: 'https://clever-knuth-2dabed.netlify.app/assets/delivery.png',
          }}
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            resizeMode: 'contain',
          }}
        />
        <View style={{ marginLeft: SPACING.sm, flex: 1 }}>
          <Text style={{ color: COLORS.lightgrey, fontSize: 17 }}>Delivery Now</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{ fontSize: 18, fontWeight: '800', color: COLORS.black }}>
              Selected Location
            </Text>
            <AntDesign
              name="down"
              size={20}
              color={COLORS.primary}
              style={{ marginLeft: SPACING.xs, marginTop: SPACING.xs }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.lightgrey,
            padding: SPACING.xs,
            borderRadius: IMAGE_SIZE / 2,
          }}>
          <AntDesign name="user" size={35} color={COLORS.primary} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: COLORS.lightgrey,
            height: 50,
            flex: 1,
            marginRight: SPACING.sm,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: SPACING.xs,
            paddingLeft: SPACING.xs,
          }}>
          <AntDesign name="search1" size={24} color={COLORS.primary} />
          <TextInput
            placeholder="Restaurants Dishes"
            style={{
              height: 40,
              fontSize: 16,
              marginLeft: SPACING.sm,
              flex: 1,
              color: COLORS.grey,
            }}
          />
        </View>
        <FontAwesome name="sliders" size={40} color={COLORS.primary} />
      </View>
    </View>
  );
};

export default HeaderHome;
