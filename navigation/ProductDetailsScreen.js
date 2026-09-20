import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const ProductDetailsScreen = ({ route }) => {

  const { product, addToCart } = route.params;


  return (
    <View style={styles.container}>

      <Image
        source={product.image}
        style={styles.image}
      />


      <Text style={styles.name}>
        {product.name}
      </Text>


      <Text style={styles.category}>
        For: {product.category}
      </Text>


      <Text style={styles.price}>
        ₱{product.price}
      </Text>


      <Text style={styles.description}>
        {product.description}
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(product)}
      >

        <Text style={styles.buttonText}>
          Add to Cart
        </Text>

      </TouchableOpacity>

    </View>
  );
};


export default ProductDetailsScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "ivory",
    padding: 20
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    borderRadius: 15,
    marginBottom: 20
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkgreen"
  },

  category: {
    color: "gray",
    fontSize: 15,
    marginTop: 8
  },

  price: {
    color: "seagreen",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 18
  },

  description: {
    fontSize: 16,
    color: "dimgray",
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 35
  },

  button: {
    backgroundColor: "seagreen",
    padding: 17,
    borderRadius: 15,
    alignItems: "center",

    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  }

});
