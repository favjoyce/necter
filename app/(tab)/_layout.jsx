import { View, Text } from 'react-native'
import {Tabs} from 'expo-router'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const _layout = () => {
  return (
   <Tabs screenOptions={{
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'black',
        headerShown:false,
         tabBarStyle:{height:90},
         tabBarLabelStyle:{
            fontSize:11,
            marginTop:5
         }
         ,
         tabBarIconStyle:{
            fontSize:18,
         }
        }}>
    <Tabs.Screen name='shop' options={{
          title: "Shop",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="other-houses" size={size} color={color} />
          ),
        }}/>
    <Tabs.Screen name='explore' options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="manage-search" size={size} color={color} />
          ),
        }}/>
    <Tabs.Screen name='cart' options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}/>    

    <Tabs.Screen name='favourite' options={{
          title: "Favourite",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="heart" size={size} color={color} />
          ),
        }}/>   
     <Tabs.Screen name='account' options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user" size={size} color={color} />
          ),
        }}/>     
   </Tabs>
  )
}

export default _layout