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
        Nimal Pet Store
      </Text>

      <Text style={styles.subtitle}>
        Pet Shop & Supplies
      </Text>

      <Text style={styles.message}>
        Para sa Alaga mong palamunin
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >

        <Text style={styles.buttonText}>
          Shop Now
        </Text>

      </TouchableOpacity>

    </View>
  );
};


export default HomeScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "floralwhite",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  logo: {
    width: 210,
    height: 210,
    resizeMode: "contain",
    marginBottom: 20
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "darkgreen"
  },

  subtitle: {
    fontSize: 20,
    color: "seagreen",
    marginTop: 5
  },

  message: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30
  },

  button: {
    backgroundColor: "seagreen",
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 10
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  }

});