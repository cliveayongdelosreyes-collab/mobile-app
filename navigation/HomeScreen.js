import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        🐾
      </Text>

      <Text style={styles.title}>
        Kahayupang Hanap Buhay Pet Store
      </Text>

      <Text style={styles.subtitle}>
        Kahayupang Hanap Buhay - Pet Supplies
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
    backgroundColor: "honeydew",

    justifyContent: "center",
    alignItems: "center",

    padding: 25
  },

  logo: {
    fontSize: 80
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "seagreen"
  },

  subtitle: {
    fontSize: 20,
    marginTop: 5
  },

  message: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 30
  },

  button: {
    backgroundColor: "seagreen",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },

  cartButton: {
    marginTop: 15,
    padding: 15
  },

  cartText: {
    color: "seagreen",
    fontSize: 16,
    fontWeight: "bold"
  }

});