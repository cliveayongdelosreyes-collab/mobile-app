import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a global box to hold our cart items so any screen can see them
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // A list to hold the items added to the cart along with their quantity
  const [cart, setCart] = useState([]);

  // Load the saved cart from the phone when the app starts
  useEffect(() => {
    loadCart();
  }, []);

  // Read saved cart items from phone memory
  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem("@nimal_cart");
      if (storedCart !== null) {
        // Turn text back into a real list of items
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Error loading cart", error);
    }
  };

  // Helper function to update screen state and save the cart list to phone memory
  const saveCart = async (updatedCart) => {
    setCart(updatedCart);
    await AsyncStorage.setItem("@nimal_cart", JSON.stringify(updatedCart));
  };

  // Add an item to the cart, or increase its count if it's already in there
  const addToCart = async (product) => {
    const existingIndex = cart.findIndex((item) => item.product.id === product.id);
    let updatedCart = [...cart];

    if (existingIndex > -1) {
      // Item already in cart, so just add +1 to the quantity
      updatedCart[existingIndex].quantity += 1;
    } else {
      // Item is brand new, so add it with a starting quantity of 1
      updatedCart.push({ product, quantity: 1 });
    }

    await saveCart(updatedCart);
  };

  // Increase or decrease the amount of an item in the cart
  const updateQuantity = async (productId, amount) => {
    let updatedCart = cart
      .map((item) => {
        if (item.product.id === productId) {
          const newQty = item.quantity + amount;
          // Keep item if quantity is more than 0, otherwise remove it
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean);

    await saveCart(updatedCart);
  };

  // Remove an item completely from the cart
  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    await saveCart(updatedCart);
  };

  // Add up the cost of all items in the cart to get the total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    // Share cart data and all shopping functions with every screen in the app
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};