import React from "react";

import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";


const CartScreen = ({ route }) => {

  const { cart, removeFromCart } = route.params;

  const total = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);


  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (

        <FlatList
          data={cart}

          keyExtractor={(item, index) =>
            item.id + index
          }

          renderItem={({ item, index }) => (

            <View style={styles.cartItem}>

              <Image
                source={item.image}
                style={styles.image}
              />


              <View style={styles.info}>

                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  ₱{item.price}
                </Text>

              </View>


              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(index)}
              >
                <Text style={styles.removeText}>
                     Remove
                </Text>
            </TouchableOpacity>

            </View>

          )}
        />

      )}


      <View style={styles.totalBox}>

        <Text style={styles.total}>
          Total: ₱{total}
        </Text>

      </View>

    </View>
  );
};


export default CartScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 15
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "seagreen",
    marginBottom: 20
  },

  empty: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
    marginTop: 50
  },

  cartItem: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center"
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10
  },

  info: {
    flex: 1
  },

  name: {
    fontSize: 17,
    fontWeight: "bold"
  },

  price: {
    color: "seagreen",
    marginTop: 5
  },

  removeButton: {
    backgroundColor: "mistyrose",
    padding: 8,
    borderRadius: 5
  },

  removeText: {
    color: "darkred"
  },

  totalBox: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 10,
    borderRadius: 10
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right"
  }

});
