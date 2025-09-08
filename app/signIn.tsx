import { View, Text,StyleSheet,Image, TouchableOpacity,Keyboard,KeyboardAvoidingView,Platform,TouchableWithoutFeedback} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
const SignIn = () => {
   // const [step, setStep] = useState<"signIn" | "phone" | "otp">("signIn");
   const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const router = useRouter();
  return (
   <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
         
    <View style={style.main}>
      
      {isPhoneFocused ?(
         <>
         <View
        style={{
          position: "absolute",
          top: 30,
          left: 15,
          right: 0,
          height: 80,           // adjust as needed
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          zIndex: 10,           // make sure it's above content
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
         <Text>         
             <MaterialIcons name="arrow-back-ios" size={28} color="black" />
          </Text>                 
        </TouchableOpacity>
      </View>

         <View style={style.tops}>
      <Text style={style.yours}>Enter your number</Text>
      <Text style={style.mobile}>Mobile Number</Text>
    </View>
    </>
    ):(
      <>
      <View style={style.top}>
        <Image source={require('../assets/images/Diff.png')} style={style.img}/>
      </View>
      <View style={style.get}>
        <Text style={style.your}>Get your groceries {"\n"} with necter</Text>
      </View>
      </>)}
   
    
     
        <View style={style.phone}>
          <View style={{ flex: 1, justifyContent: "center" , padding: 20 }}>
            <PhoneInput
              value={phone}
              onChangePhoneNumber={setPhone}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={setSelectedCountry}
            onFocus={() => setIsPhoneFocused(true)}   // input active
              onBlur={() => setIsPhoneFocused(false)} 
              {...({ inputProps: { keyboardType: "phone-pad" } } as any)}
            />
          </View>
        </View>
        {isPhoneFocused ?(
         <View style={style.greenhold}>
            <TouchableOpacity style={style.green} onPress={()=>router.navigate('/code')}> 
               <Text><MaterialIcons name="arrow-forward-ios" size={28} color="white" /></Text>
</TouchableOpacity>
         </View>

        ):(null)}
{isPhoneFocused ? (null):(
   <>
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
   </>)}
    </View>
          </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignIn;

const style=StyleSheet.create({
   greenhold:{
      // backgroundColor:'#53b175',
      width:'90%',
      alignItems:'flex-end',
      marginTop:'59%'
   },
   green:{     
       backgroundColor:'#53b175',
       alignItems:'center',
       justifyContent:'center',
       width:59,
       height:59,
       borderRadius:28.9
},
   mobile:{
      color:'#7c7c7c7c',
      fontWeight:'600',
      fontSize:16,
      marginTop:10,


   },
   yours:{
      color:'#181725',
      fontWeight:'600',
      fontSize:26,


   },
 main:{
    flex:1,
    alignItems:'center'
 },
 top:{
   width:"100%",
   height:"40%",
 },
 tops:{
   marginTop:'30%',
   marginBottom:5,
   padding:0,
   marginLeft:0,
   // backgroundColor:'red',
  width:'90%',
  height:'12%',
 },
 img:{
    objectFit:'contain',
 },
 get:{
    width:'100%',
    height:70,
   //  backgroundColor:"red",
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
   //  backgroundColor:'white',
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


