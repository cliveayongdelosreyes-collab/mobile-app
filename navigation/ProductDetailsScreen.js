import React from "react";
import {View, Text, Image, Button, StyleSheet} from "react-native";

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


      <Button
        style={styles.button}
        onPress={() => addToCart(product)}
      >

        <Text style={styles.buttonText}>
          Add to Cart
        </Text>

      </Button>

    </View>
  );
};


export default ProductDetailsScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },

  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginBottom: 20
  },

  name: {
    fontSize: 28,
    fontWeight: "bold"
  },

  category: {
    color: "gray",
    marginTop: 5
  },

  price: {
    color: "seagreen",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15
  },

  description: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 30
  },

  button: {
    backgroundColor: "seagreen",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  }

});