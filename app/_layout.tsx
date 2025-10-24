// import { Stack } from "expo-router";
// import { HeaderBackButton } from "@react-navigation/elements";

// export default function RootLayout() {
//   return (
//   <Stack screenOptions={{headerShown:false}}>
//     <Stack.Screen name="index" options={{  title:""}}   />
//     <Stack.Screen name="second"   />

//     <Stack.Screen name="signIn"  options={({ navigation }) => ({   
//     headerShown: true,
//     headerTitle: "",
//     headerTransparent: true,
//     headerLeft: (props) => (
//       <HeaderBackButton
//         {...props}
//         tintColor="black" // 
//         label=""          // hides the text
//         onPress={() => {
//           if (navigation.canGoBack()) {
//             navigation.goBack();   // normal back
//           } else {
//             navigation.replace("second"); // fallback
//           }
//         }}
//       />
//     ),
//   })}
//  />


//   </Stack>);
// }
import { Text, View,StyleSheet,Image} from "react-native";
import { Stack, useRouter } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";
import React from "react";
import { CartProvider } from "./context/CartContext";


export default function RootLayout() {
  const router = useRouter();

  return (
    <CartProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tab)" options={{ title: "" }} />
      <Stack.Screen name="second" />
            <Stack.Screen name="code" />

      <Stack.Screen
  name="signIn"
  options={({ navigation }) => ({
    headerShown: false,
    headerTitle: "",                // no text
    headerTransparent: true,        // keep header transparent
    headerLeft: () => (
      <View style={{ paddingLeft: 10, paddingTop: 5 }}> 
        <HeaderBackButton
          tintColor="black"
          label=""
          onPress={() => navigation.replace("second")}
        />
      </View>
    ),
    headerStyle: { backgroundColor: "transparent" },
    headerTintColor: "black",
  })}
/>

            
       
    </Stack>
    </CartProvider>
  );
}
