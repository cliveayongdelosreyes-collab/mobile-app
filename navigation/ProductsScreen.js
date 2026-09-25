import React from "react";
import { View, Text, TextInput, FlatList, StyleSheet} from "react-native";
import products from "../data/products";
import ProductCard from "../components/ProductCard";


const ProductsScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Pet Supplies
      </Text>

      <Text style={styles.subtitle}>
        Choose a product for your pet.
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Search products..."
      />


      <FlatList
        data={products}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <ProductCard
            product={item}

            onView={() =>
              navigation.navigate("Details", {
                product: item
              })
            }
          />

        )}
      />

    </View>

  );
};


export default ProductsScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 15
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "darkgreen"
  },

  subtitle: {
    fontSize: 15,
    color: "dimgray",
    marginTop: 5,
    marginBottom: 15
  },

  input: {
    backgroundColor: "white",
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 15
  }

});