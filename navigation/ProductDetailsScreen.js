import React, { useContext } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

const ProductDetailsScreen = ({ route, navigation }) => {
  // Read product details passed from navigation route parameters
  const { product } = route.params;

  // Access favorites state directly from global context
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.includes(product.id);

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={product.image}
        style={styles.image}
      />

      {/* Product Title */}
      <Text style={styles.name}>
        {product.name}
      </Text>

      {/* Product Category */}
      <Text style={styles.category}>
        Category: {product.category}
      </Text>

      {/* Product Price */}
      <Text style={styles.price}>
        ₱{product.price}
      </Text>

      {/* Product Description */}
      <Text style={styles.description}>
        {product.description}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center"
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20
  },
  name: {
    fontSize: 28,
    fontWeight: "bold"
  },
  category: {
    fontSize: 16,
    color: "gray",
    marginTop: 5
  },
  price: {
    fontSize: 22,
    color: "seagreen",
    fontWeight: "bold",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20
  },
  favBtn: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
    alignItems: "center"
  },
  favBtnActive: {
    backgroundColor: "#ffe6e6"
  },
  favBtnText: {
    fontWeight: "bold",
    color: "#333"
  },
  button: {
    backgroundColor: "seagreen",
    padding: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 30
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});