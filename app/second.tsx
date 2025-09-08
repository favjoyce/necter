import { View, Text, ImageBackground,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const second = () => {
  return (
        <ImageBackground source={require('../assets/images/man.png')} style={style.main}>
            <View style={style.view}>
                <Image source={require("../assets/images/carrot1.png")}/>
                <Text style={style.welcome}>
                    Welcome {"\n"} to our store
                </Text>
                <Text style={style.get}>Get your groceries in as fast as one hour</Text>

                <Link href="/signIn" asChild>
                <TouchableOpacity style={style.touch}>
                    <Text style={style.start} >Get Started</Text>
                </TouchableOpacity>
                </Link>
            </View>
        </ImageBackground>
  )
}

export default second;

const style=StyleSheet.create({
 main:{
    flex:1,
    resizeMode: "cover", 
    justifyContent: 'flex-end',
    alignItems: "center",

 },
 view:{
//    backgroundColor:'white',
   width:'95%',
   height:299,
   marginBottom:'20%',
   alignItems:'center'
 },
 welcome:{
    color:'white',
    textAlign:'center',
    fontSize:48,
    fontWeight:"600"
 },
 get:{
 color:'white',
 fontWeight:"400",
 fontSize:15.9,
 marginBottom:30
 },
 touch:{
    backgroundColor:"#53b175",
    width:"100%",
    height:59,
    alignItems:'center',
    color:'white',
    justifyContent:'center',
    display:'flex',
    marginTop:0,
    borderRadius:15,
 },
 start:{
    color:'white',
    fontWeight: '500'
}
})