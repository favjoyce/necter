import { View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

  return (
    <View style={style.main}>
      <View style={style.top}>
        <Image source={require('../assets/images/Diff.png')} style={style.img}/>
      </View>
      <View style={style.get}>
        <Text style={style.your}>Get your groceries {"\n"} with necter</Text>
      </View>
    <View style={style.phone}>
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <PhoneInput
        value={phone}
        onChangePhoneNumber={setPhone}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={setSelectedCountry}
      />
    </View>
    </View>
    <View style={style.connect}><Text style={style.ctext}>Or connect with social media</Text></View>
    <TouchableOpacity style={style.google}>
        <View style={style.f1}>
            <Icon name="google" size={30} color="white" />
            <Text style={style.g1}>Continue With Google</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={style.facebook}>
        <View style={style.f1}>
                  <Icon name="facebook" size={30} color="white" />
            <Text style={style.g1}>Continue With Facebook</Text>
        </View>
    </TouchableOpacity>
    </View>
  )
}

export default SignIn;

const style=StyleSheet.create({
 main:{
    flex:1,
    alignItems:'center'
 },
 top:{
   width:"100%",
   height:"40%",
 },
 img:{
    objectFit:'contain',
 },
 get:{
    width:'100%',
    height:70,
    // backgroundColor:"red",
    marginTop:70,
    alignItems:'center'
 },
 your:{
    color:'black',
    width:'95%',
    textAlign:'left',
    fontSize:25.9,
    fontWeight:'600'
 },
 phone:{
    width:'100%',
    // backgroundColor:'white',
    height:50
 },
 connect:{
     width:'100%',
    height:50,
    alignItems:'center',
    justifyContent:'center'
 },
 ctext:{
    color:'#828282',
    fontSize:14,
    fontWeight:'600'

 },
 google:{
 width:'95%',
 height:55,
 borderRadius:15,
 backgroundColor:'#5383ec',
 alignItems:'center',
 justifyContent:'center'
 },
 facebook:{
 alignItems:'center',
 justifyContent:'center',
 width:'95%',
 height:55,
 borderRadius:15,
 backgroundColor:'#4a66ac',
 marginTop:27,

 }
 ,
 g1:{
    color:'#fcfcfc',
    fontSize:18,
    fontWeight:'600',
 },
 f1:{
    flexDirection:'row',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'70%'

 }
});

