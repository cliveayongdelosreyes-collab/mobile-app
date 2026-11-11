import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./navigation/HomeScreen";
import ProductsScreen from "./navigation/ProductsScreen";
import ProductDetailsScreen from "./navigation/ProductDetailsScreen";
import CartScreen from "./navigation/CartScreen";

// Import our context wrappers so every screen gets access to cart and favorites
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Outer wrapper: gives every screen access to favorites
    <FavoritesProvider>
      {/* Inner wrapper: gives every screen access to the cart */}
      <CartProvider>
        {/* NavigationContainer: controls switching between screens */}
        <NavigationContainer>
          <Stack.Navigator>
            
            {/* 1. Welcome Screen */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />

            {/* 2. Main Product Catalog Screen */}
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={{title: "Animalka"}}
            />

            {/* 3. Detailed Product View Screen */}
            <Stack.Screen
              name="Details"
              component={ProductDetailsScreen}
              options={{title: "Product Details"}}
            />

            {/* 4. Shopping Cart Screen */}
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{title: "My Cart"}}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </FavoritesProvider>
  );
}