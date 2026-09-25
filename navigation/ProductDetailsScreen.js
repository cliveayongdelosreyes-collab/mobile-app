import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const ProductDetailsScreen = ({ route, navigation }) => {

  const { product } = route.params;


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
        Category: {product.category}
      </Text>

      <Text style={styles.price}>
        ₱{product.price}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.buttonText}>
          Back
        </Text>

      </TouchableOpacity>

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