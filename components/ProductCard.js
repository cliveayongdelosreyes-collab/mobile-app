import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, onView }) => {
  // Grab the addToCart function directly from global cart context
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.card}>
      {/* Product Image */}
      <Image
        source={product.image}
        style={styles.image}
      />

      <View style={styles.info}>
        {/* Product Name */}
        <Text style={styles.name}>
          {product.name}
        </Text>

        {/* Price display */}
        <Text style={styles.price}>
          ₱{product.price}
        </Text>

        {/* Action Buttons Row */}
        <View style={styles.actionRow}>
          {/* View Details Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={onView}
          >
            <Text style={styles.buttonText}>
              View
            </Text>
          </TouchableOpacity>

          {/* Add to Cart Button */}
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.buttonText}>
              + Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  price: {
    fontSize: 16,
    color: "seagreen",
    marginTop: 5
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10
  },
  button: {
    backgroundColor: "seagreen",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: "center"
  },
  cartButton: {
    backgroundColor: "darkgreen",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});