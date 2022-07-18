import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { restaurants } from '../constants/data';
import {
  HeaderRestaurant,
  RestaurantDetails,
  Gradients,
  DishCounter,
  BasketButton,
} from '../../components';
import { COLORS, SPACING } from '../constants/theme';

const RestaurantScreen = ({ route }) => {
  const { id } = route.params;
  const {
    imageUri,
    delivery,
    minutes,
    miles,
    votes,
    rating,
    title,
    dishes,
    quantite,
  } = restaurants
    .flatMap((item) => item.contents)
    .find((item) => item.id == id);

  const [selected, setSelected] = useState(0);
  const [disheData, setDisheData] = useState(dishes);
  const handleAdd = (id) => {
    const dishesupdate = disheData.map((item) =>
      item.id == id ? { ...item, quantite: item.quantite + 1 } : item
    );
    setDisheData(dishesupdate);
  };

  const handleRemove = (id, count) => {
    const dishesupdate = disheData.map((item) =>
      item.id == id ? { ...item, quantite: count - 1 } : item
    );
    if (count > 0) {
      setDisheData(dishesupdate);
    }
  };

  const dishDataSelected = disheData.filter((item) => item.quantite > 0);
  const total = dishDataSelected.reduce(
    (acc, current) => acc + current.price * current.quantite,
    0
  );
  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        style={{ flex: 1 }}>
        <HeaderRestaurant imageUri={imageUri} />
        <RestaurantDetails
          title={title}
          minutes={minutes}
          rating={rating}
          miles={miles}
          delivery={delivery}
        />
        <View style={{ marginTop: SPACING.md, marginHorizontal: SPACING.sm }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              lineHeight: 36,
              color: COLORS.black,
              paddingTop: SPACING.md,
              paddingBottom: SPACING.xl,
            }}>
            Menu
          </Text>
          <View style={{ flexGrow: 1 }}>
            <ScrollView contentContainerStyle={{ paddingBottom: SPACING.md }}>
              {disheData.map((item) => (
                <View>
                  <Gradients dish={item} onSelect={() => setSelected(item.id)} />
                  <DishCounter
                    showDishCounter={selected === item.id}
                    count={item.quantite}
                    onAdd={() => handleAdd(item.id)}
                    onRemove={() => handleRemove(item.id, item.quantite)}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

      </ScrollView>
      {dishDataSelected.length > 0 && (
        <BasketButton dishDataSelected={dishDataSelected} total={total} />
      )}
    </>
  );
};

export default RestaurantScreen;
