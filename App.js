import React, { useState } from "react";
import {TouchableOpacity,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./navigation/HomeScreen.js";
import ProductsScreen from "./navigation/ProductsScreen.js";
import ProductDetailsScreen from "./navigation/ProductDetailsScreen.js";
import CartScreen from "./navigation/CartScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {

    setCart([...cart, product]);
  };
  const removeFromCart = (index) => {

    const newCart = cart.filter(
      (item, itemIndex) => itemIndex !== index
    );

    setCart(newCart);

  };

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />


        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{title: "Kahayupang Hanap Buhay Pet Store"}}
        />


        <Stack.Screen
          name="Details"
        >

          {(props) => (

            <ProductDetailsScreen
              {...props}

              route={{
                ...props.route,

                params: {
                  ...props.route.params,
                  addToCart: addToCart
                }
              }}
            />

          )}

        </Stack.Screen>


        <Stack.Screen
          name="Cart"
        >

          {(props) => (

            <CartScreen
              {...props}

              route={{
                ...props.route,

                params: {
                  cart: cart,
                  removeFromCart: removeFromCart
                }
              }}
            />

          )}

        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>

  );
}