import React, { useState, useContext } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

import { FavoritesContext } from "../context/FavoritesContext";
import { CartContext } from "../context/CartContext";

const ProductsScreen = ({ navigation }) => {
  // State variable: remembers what the user is typing in the search box
  const [searchQuery, setSearchQuery] = useState("");

  // State variable: remembers which category button is selected ("All", "Dog", or "Cat")
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Access global context data directly
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { cart } = useContext(CartContext);

  // Add up total quantity of all items in cart to show on top of the shopping cart button
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Filter products: only show items matching selected category AND typed search text
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>

      {/* Header section with screen title and shopping cart badge */}
      <View style={styles.headerBar}>
        <View>
          <Text style={styles.title}>Pet Supplies</Text>
          <Text style={styles.subtitle}>Choose a product for your pet.</Text>
        </View>

        {/* Button that shows current cart total and opens the Cart Screen when tapped */}
        <TouchableOpacity
          style={styles.cartBadgeButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.cartBadgeText}>🛒 {totalCartItems}</Text>
        </TouchableOpacity>
      </View>

      {/* Search Input Box: updates search state every time a character is typed */}
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Category filter buttons row */}
      <View style={styles.categoryContainer}>
        {["All", "Dog", "Cat"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.categoryButtonTextActive
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* FlatList: efficiently renders only visible items on screen to keep app fast */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
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
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "darkgreen"
  },
  subtitle: {
    fontSize: 15,
    color: "dimgray",
    marginTop: 2
  },
  cartBadgeButton: {
    backgroundColor: "seagreen",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20
  },
  cartBadgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 15
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 15
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 10
  },
  categoryButtonActive: {
    backgroundColor: "seagreen"
  },
  categoryButtonText: {
    color: "#333",
    fontWeight: "bold"
  },
  categoryButtonTextActive: {
    color: "white"
  }
});