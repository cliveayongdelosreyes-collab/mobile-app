import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./navigation/HomeScreen";
import ProductsScreen from "./navigation/ProductsScreen";
import ProductDetailsScreen from "./navigation/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {

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
          options={{title: "Animalka"}}
        />

        <Stack.Screen
          name="Details"
          component={ProductDetailsScreen}
          options={{title: "Product Details"}}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}