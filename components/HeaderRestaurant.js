
import React from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { COLORS, SPACING } from '../src/constants/theme';

const HeaderRestaurant = ({ imageUri }) => {
  const navigation = useNavigation()
  return (
    <View style={{ height: 200 }}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: imageUri,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            padding: SPACING.sm,
            borderRadius: SPACING.xl,
            marginTop: SPACING.md,
            marginLeft: SPACING.md,
          }}>
          <AntDesign name="arrowleft" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default HeaderRestaurant