import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const ProductCard = ({ product, onPress }) => {

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>

      <Image source={product.image} style={styles.image}/>

      <View style={styles.info}>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.category}>
          For: {product.category}
        </Text>

        <Text style={styles.price}>
          ₱{product.price}
        </Text>

      </View>

    </TouchableOpacity>
  );
};


export default ProductCard;


const styles = StyleSheet.create({

  card: {
    backgroundColor: "white",
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center"
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: "contain"
  },

  info: {
    flex: 1
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  category: {
    color: "gray",
    marginTop: 5
  },

  price: {
    color: "seagreen",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5
  }

});