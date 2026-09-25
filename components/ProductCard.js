import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const ProductCard = ({ product, onView }) => {

  return (
    <View style={styles.card}>

      <Image
        source={product.image}
        style={styles.image}
      />

      <View style={styles.info}>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          ₱{product.price}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onView}
        >

          <Text style={styles.buttonText}>
            View
          </Text>

        </TouchableOpacity>

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

  button: {
    backgroundColor: "seagreen",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  }

});