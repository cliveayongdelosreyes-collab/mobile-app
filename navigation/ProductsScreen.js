import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductsScreen = ({ navigation }) => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
         Pet Supplies
      </Text>


      <TextInput
        style={styles.search}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.categories}>

        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setCategory("All")}
        >
          <Text>All</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setCategory("Dog")}
        >
          <Text>Dog</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setCategory("Cat")}
        >
          <Text>Cat</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setCategory("Bird")}
        >
          <Text>Bird</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setCategory("Fish")}
        >
          <Text>Fish</Text>
        </TouchableOpacity>

      </View>


      <FlatList
        data={filteredProducts}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <ProductCard
            product={item}

            onPress={() =>
              navigation.navigate("Details", {
                product: item
              })
            }
          />

        )}

        showsVerticalScrollIndicator={false}
      />


      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >

        <Text style={styles.cartButtonText}>
          View Cart
        </Text>

      </TouchableOpacity>

    </View>
  );
};


export default ProductsScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "ivory",
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 20
  },

  search: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    padding: 14,
    fontSize: 16,
    marginBottom: 18
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  categoryButton: {
    backgroundColor: "honeydew",
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgreen"
  },

  cartButton: {
    backgroundColor: "seagreen",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,

    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4
  },

  cartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }

});
