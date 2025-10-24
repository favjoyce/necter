import { View, Text ,StyleSheet, TextInput ,Keyboard,KeyboardAvoidingView,Platform,TouchableWithoutFeedback} from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { router } from 'expo-router'
// import { KeyboardAvoidingView } from 'react-native'

const code = () => {
     const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  
const inputRefs = useRef<Array<TextInput | null>>([]); 
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]); // 6 digits

const handleOtpChange = (index: number, value: string) => {
  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);
};



  return (
    <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={style.mainView}>
      <View
              style={{
                position: "absolute",
                top: 30,
                left: 15,
                right: 0,
                height: 80,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                zIndex: 10,
              }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Text>
                   <MaterialIcons name="arrow-back-ios" size={28} color="black" />
                </Text>
                 </TouchableOpacity>
            </View>

            <View style={
              style.main
            }>
              <Text style={style.mtext}>Enter your 4-digit code</Text>
              <Text style={style.code}>Code</Text>
            </View>

            <View style={{ flexDirection: "row",
               justifyContent: "space-between", width: "80%", alignSelf: "center" }}>
  {[0,1,2,3,4,5].map((i) => (
<TextInput   
  onFocus={() => setIsPhoneFocused(true)}
  onBlur={() => setIsPhoneFocused(false)} 
  ref={(ref) => {
    inputRefs.current[i] = ref; 
  }}
  value={otp[i]}
  onChangeText={(text) => {
    handleOtpChange(i, text);
    if (text && i < otp.length - 1) {
      inputRefs.current[i + 1]?.focus();
    }
  }}

  onKeyPress={({ nativeEvent }) => {
    if (nativeEvent.key === "Backspace" && i > 0 && !otp[i]) {
      inputRefs.current[i - 1]?.focus();
    }
  }}
  keyboardType="number-pad"
  maxLength={1}
  style={{
    borderBottomWidth: 2,
    borderColor: "white",
    fontSize: 24,
    textAlign: "center",
    width: 40,
    height: 50,
  }}
/>
  ))}
</View>

{isPhoneFocused ?(
         <View style={style.greenhold}>
                        <Text style={style.resend}>Resend Code</Text> 

            <TouchableOpacity style={style.green} onPress={()=>router.navigate('/Login')}> 
               <Text style={style.resendText}> <MaterialIcons name="arrow-forward-ios" size={28} color="white" /></Text>
</TouchableOpacity>
         </View>

        ):(null)}
    </View>

    </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
     )
  
}

export default code

const style=StyleSheet.create({
  main:{
    marginTop:'30%',
    width:'88%',
    // height:40,
    // backgroundColor:'red',
    justifyContent:'center'
  },
  mtext:{
    fontSize:27,
    fontWeight:'600'

  },
  code:{
    color:'#7c7c7c7c',
    fontSize:15,
    fontWeight:'600',
    marginTop:30

  },
  mainView:{
   flex:1,
   alignItems:'center',
  //  justifyContent:"center"
  },
     greenhold:{
      // backgroundColor:'#53b175',
      width:'90%',
      marginTop:'59%',
      justifyContent:'space-between',
      display:'flex',
      alignItems:'center',
      flexDirection:'row'

   },
   resend:{
    color:'#53b175',
    fontSize:18,
    fontWeight:'400'
   },
   green:{     
      backgroundColor:'#53b175',
       alignItems:'center',
       justifyContent:'center',
       width:59,
       height:59,
       borderRadius:28.9,
       display:'flex'

},
resendText:{

}
})