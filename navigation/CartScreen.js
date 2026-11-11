import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  // Grab cart items, quantity change function, remove function, and total price calculator
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {/* If cart is empty, show empty message; otherwise render list */}
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty!</Text>
        </View>
      ) : (
        <>
          {/* List of items currently in cart */}
          <FlatList
            data={cart}
            keyExtractor={(item) => item.product.id}
            renderItem={({ item }) => (
              <View style={styles.cartCard}>
                <Image source={item.product.image} style={styles.image} />
                
                <View style={styles.info}>
                  <Text style={styles.name}>{item.product.name}</Text>
                  <Text style={styles.price}>₱{item.product.price}</Text>

                  {/* Quantity adjustment buttons */}
                  <View style={styles.qtyRow}>
                    {/* Decrease quantity by 1 button */}
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => updateQuantity(item.product.id, -1)}
                    >
                      <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>

                    {/* Current quantity display */}
                    <Text style={styles.qtyText}>{item.quantity}</Text>

                    {/* Increase quantity by 1 button */}
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => updateQuantity(item.product.id, 1)}
                    >
                      <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>

                    {/* Remove item button */}
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() => removeFromCart(item.product.id)}
                    >
                      <Text style={styles.deleteText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

          {/* Bottom checkout bar displaying calculated total price */}
          <View style={styles.footer}>
            <Text style={styles.totalText}>Total: ₱{getTotalPrice()}</Text>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    fontSize: 18,
    color: "gray"
  },
  cartCard: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  price: {
    color: "seagreen",
    fontWeight: "bold",
    marginTop: 2
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8
  },
  qtyBtn: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5
  },
  qtyBtnText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  qtyText: {
    marginHorizontal: 10,
    fontWeight: "bold"
  },
  deleteBtn: {
    marginLeft: "auto"
  },
  deleteText: {
    color: "crimson",
    fontWeight: "bold",
    fontSize: 12
  },
  footer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkgreen"
  },
  checkoutBtn: {
    backgroundColor: "seagreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold"
  }
});