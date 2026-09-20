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
    backgroundColor: "whitesmoke",
    padding: 15
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "seagreen",
    marginBottom: 15
  },

  search: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },

  categoryButton: {
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8
  },

  cartButton: {
    backgroundColor: "seagreen",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  cartButtonText: {
    color: "white",
    fontWeight: "bold"
  }

});
