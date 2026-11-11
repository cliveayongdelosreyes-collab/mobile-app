import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a global box to hold our favorite items so any screen can see them
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // A simple list to keep track of favorite item IDs in memory
  const [favorites, setFavorites] = useState([]);

  // Automatically load saved favorites as soon as the app opens
  useEffect(() => {
    loadFavorites();
  }, []);

  // Read saved favorites from the phone's long-term memory
  const loadFavorites = async () => {
    try {
      const storedFavs = await AsyncStorage.getItem("@nimal_favorites");
      if (storedFavs !== null) {
        // Convert text back into a real list we can use
        setFavorites(JSON.parse(storedFavs));
      }
    } catch (error) {
      console.error("Error loading favorites", error);
    }
  };

  // Turn a favorite ON or OFF when tapped, then save it permanently to the phone
  const toggleFavorite = async (productId) => {
    try {
      let updatedFavs;
      if (favorites.includes(productId)) {
        // If it's already a favorite, take it out of the list
        updatedFavs = favorites.filter((id) => id !== productId);
      } else {
        // If it's not a favorite yet, put it into the list
        updatedFavs = [...favorites, productId];
      }

      // Update the screen instantly
      setFavorites(updatedFavs);

      // Convert our list into text and save it to the phone's hard drive
      await AsyncStorage.setItem("@nimal_favorites", JSON.stringify(updatedFavs));
    } catch (error) {
      console.error("Error updating favorites", error);
    }
  };

  return (
    // Share the favorites list and toggle function with all screens in the app
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};