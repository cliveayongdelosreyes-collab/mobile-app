import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <Image
      source={require("../assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>
        Kahayupang Hanap Buhay
      </Text>

      <Text style={styles.subtitle}>
       Pet Supplies
      </Text>

      <Text style={styles.message}>
        Para sa alaga mong palamunin
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>
          Shop Now
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.cartText}>
          View Cart
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "ivory",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    borderRadius: 40,
    marginBottom: 20
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "darkgreen",
    textAlign: "center"
  },

  subtitle: {
    fontSize: 20,
    color: "dimgray",
    marginTop: 8
  },

  message: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 35
  },

  button: {
    backgroundColor: "seagreen",
    width: "100%",
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
  },

  cartButton: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "seagreen"
  },

  cartText: {
    color: "seagreen",
    fontSize: 16,
    fontWeight: "bold"
  }

});