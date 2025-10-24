import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, decreaseFromCart, removeFromCart } = useCart();
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.mycart}>My Cart</Text>

        {cart.map((item) => (
          <View style={styles.ind} key={item.id}>
            {/* Product Image */}
            <View style={styles.indImg}>
              <Image
                source={item.image} // 👈 dynamic image from cart
                style={{ width: 70, height: 70, resizeMode: "contain" }}
              />
            </View>

            {/* Product Details */}
            <View style={styles.indOther}>
              <View style={styles.bell}>
                <View>
                  <Text style={{ fontSize: 17, fontWeight: "600", color: "#181725" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#7C7C7C" }}>
                    {item.piece} Price
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 17, fontWeight: "600", color: "#B3B3B3" }} 
                                  onPress={() => removeFromCart(item.id)}>X</Text>
                </View>
              </View>

              {/* Quantity + Price */}
              <View style={styles.add}>
                <View style={styles.addflex}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => decreaseFromCart(item.id)}
                  >
                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#B3B3B3" }}>-</Text>
                  </TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity
                    style={[styles.qtyButton, { borderColor: "#53B175" }]}
                    onPress={() => console.log("Increase qty")}
                  >
                    <Text           
                          onPress={() => addToCart(item)}
                     style={{ fontSize: 17, fontWeight: "600", color: "#53B175" }}>+</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}> $ {(item.price * item.quantity).toFixed(2)}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  addflex: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  add: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    width: "90%",
  },
  qtyButton: {
    backgroundColor: "#E2E2E2",
    borderColor: "#B3B3B3",
    borderRadius: 5,
    borderWidth: 1.5,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  bell: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  indOther: {
    width: "80%",
  },
  indImg: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  ind: {
    width: "90%",
    height: 120,
    gap: 10,
    flexDirection: "row",
    marginTop: 20,
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 1.5,
  },
  main: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mycart: {
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 1.5,
    width: "90%",
    height: 70,
    marginTop: "19%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
  },
});
