// import { View, Text, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { StyleSheet,Image, TouchableOpacity,Keyboard,KeyboardAvoidingView,Platform,TouchableWithoutFeedback} from 'react-native'
// import { Link, router } from 'expo-router'
// import { MaterialIcons } from '@expo/vector-icons'


// const SignUP = () => {
//       const [email, setEmail] = useState("");
//       const [user, setUser] = useState("");

//       const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//       <KeyboardAvoidingView
//               behavior={Platform.OS === "ios" ? "padding" : "height"}
//               style={{ flex: 1 }}
//             >
//  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//     <View style={style.main}>
//         <View style={style.TopImg} ><Image source={require('../assets/images/carrot.png')} style={style.bgimg}></Image></View>
//        <View style={style.TopImgs} ><Image source={require('../assets/images/redcarrot.png')}></Image></View>
//       <View style={style.LogIn}>
//         <Text style={style.logtext}>Sign Up</Text>
//         <Text>Enter your credentials to continue</Text>
//         </View>
        
//          <View style={style.email}>
//            <Text style={style.emailtext}>Username</Text>
//            <TextInput style={style.input}
//         autoCapitalize="none"        // prevents auto-capitalization
//         autoCorrect={false}
//         value={user}
//         onChangeText={setUser} />
//         </View>

//         <View style={style.email}>
//            <Text style={style.emailtext}>Email</Text>
//            <TextInput style={style.input}
//         keyboardType="email-address" // shows @ and . on keyboard
//         autoCapitalize="none"        // prevents auto-capitalization
//         autoCorrect={false}
//         value={email}
//         onChangeText={setEmail} />
//         </View>

//                 <View style={style.emails}>
//            <Text style={style.emailtext}>Password</Text>
//            <View style={style.div}>
//                <TextInput
//           style={style.inputs}
//           secureTextEntry={!showPassword} // hides text when false
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           onPress={() => setShowPassword(!showPassword)}
//           style={style.icons}
//         >
//           <MaterialIcons
//             name={showPassword ? "visibility" : "visibility-off"}
//             size={24}
//             color="gray"
//           />
//         </TouchableOpacity>
//         </View>
//         </View>

//         <View style={style.byContinue}><Text>By continuing you agree to our <Text style={style.dHtext}>Terms of Service </Text>
//  and <Text style={style.dHtext}>Privacy Policy.</Text></Text></View>

//          <TouchableOpacity onPress={() => router.navigate('/')} style={style.submit}><Text style={style.submittext}>Sign Up</Text></TouchableOpacity>

//          <View style={style.dontHold}><Text>Already have an account? <Text style={style.dHtext} onPress={() => router.navigate('/mainLogin')}>Log In</Text></Text></View>
//     </View>
//         </TouchableWithoutFeedback>
//            </KeyboardAvoidingView>
//   )
// }

// export default SignUP;

// const style=StyleSheet.create({
//     byContinue:{
//         width:'90%',
//         marginTop:25
//     },
//     dontHold:{
//         marginTop:15
//     },
//     dHtext:{
//         color:'#53b175'
//     },
//     forgot:{
//         width:'90%',
//         alignItems:'flex-end',
//         marginTop:12
//     },
//     forgotText:{
//      color:'#181725',
//      fontSize:14,
//      fontWeight:'400'
//     },
//     container: { margin: 20 },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//   },
//   inputs: {
//     flex: 1,
//     paddingVertical: 12,
//     fontSize: 16,
//     flexDirection:'row',
   
//   },
//   icons: {
//     paddingLeft: 8,
//   },
//     email:{
//         width:'90%',
//         gap:5,
//         marginTop:20
//     },
//      emails:{
//         width:'90%',
//         gap:5,
//         marginTop:40,
//         borderBottomWidth:1,
//     borderColor:'#7c7c7c',
        
//     },
//     div:{
// flexDirection:'row',
//         alignItems:'center'
//     },
//     icon: {
//     paddingLeft: 8,
//   },
//   bgimg:{
//     width:'100%',
//     height:'100%'
//   },
//     emailtext:{
//      color:'#7c7c7c',
//      fontSize:15.9,
//      fontWeight:'600'
//     },
//     input: {
//     borderBottomWidth:1,
//     borderColor:'#7c7c7c',
//     // padding: 12,
//     fontSize: 16,
//   },
//     main:{
//         flex:1,
//         alignItems:'center',
//         // justifyContent:'center',
//         backgroundColor:'white'
//     },
//     TopImg:{
//         backgroundColor:'red',
//         width:'100%',
//         height:'25%'
//     },
//     TopImgs:{
//         // height:0,
//         // width:'20%'
//         alignItems:'center',
//         justifyContent:'center',
//         marginTop:-120
//     },
//     LogIn:{
//         marginTop:'30%',
//         width:'90%'
//     },
//     logtext:{
//         color:'#181725',
//         fontSize:25.9,
//         fontWeight:'600',
//         marginBottom:18
//     },
//     logSmall:{
//         color:'#7c7c7c',
//         fontSize:15.9,
//         fontWeight:'400'
//     },
//     submit:{
//     width:'90%',
//     height:50,
//     borderRadius:12,
//     backgroundColor:'#53b175',
//     alignItems:'center',
//     justifyContent:'center',
//     marginTop:'14%'
//    },
//    submittext:{
//     color:'white',
//     fontSize:18,
//     fontWeight:'600'
//    }
// })



import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const SignUP = () => {
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [userValid, setUserValid] = useState<boolean | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  const validateUser = (value: string) => {
    setUser(value);
    const regex = /^[a-zA-Z0-9_]{3,}$/; 
    setUserValid(regex.test(value));
  };

  const validateEmail = (value: string) => {
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(value));
  };

  const validatePassword = (value: string) => {
    setPassword(value);
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    setPasswordValid(regex.test(value));
  };

  const canSubmit = userValid && emailValid && passwordValid;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.main}>
          {/* Top Images */}
          <View style={style.TopImg}>
            <Image source={require('../assets/images/carrot.png')} style={style.bgimg} />
          </View>
          <View style={style.TopImgs}>
            <Image source={require('../assets/images/redcarrot.png')} />
          </View>

          <View style={style.LogIn}>
            <Text style={style.logtext}>Sign Up</Text>
            <Text>Enter your credentials to continue</Text>
          </View>

          <View style={style.email}>
            <Text style={style.emailtext}>Username</Text>
            <View style={style.inputWrapper}>
              <TextInput
                style={[style.input, { flex: 1 }]}
                autoCapitalize="none"
                autoCorrect={false}
                value={user}
                onChangeText={validateUser}
              />
              {userValid && <MaterialIcons name="check-circle" size={20} color="green" />}
            </View>
            {userValid === false && (
              <Text style={style.errorText}>Username must be at least 3 characters (letters, numbers, underscores only)</Text>
            )}
          </View>

          {/* Email */}
          <View style={style.email}>
            <Text style={style.emailtext}>Email</Text>
            <View style={style.inputWrapper}>
              <TextInput
                style={[style.input, { flex: 1 }]}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={validateEmail}
              />
              {emailValid && <MaterialIcons name="check-circle" size={20} color="green" />}
            </View>
            {emailValid === false && (
              <Text style={style.errorText}>Invalid email address</Text>
            )}
          </View>

          {/* Password */}
          <View style={style.emails}>
            <Text style={style.emailtext}>Password</Text>
            <View style={style.div}>
              <TextInput
                style={style.inputs}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={validatePassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={style.icons}>
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            {passwordValid === false && (
              <Text style={style.errorText}>Password must be 8+ chars & include a special character</Text>
            )}
          </View>

          {/* Terms */}
          <View style={style.byContinue}>
            <Text>
              By continuing you agree to our{" "}
              <Text style={style.dHtext}>Terms of Service </Text>
              and <Text style={style.dHtext}>Privacy Policy.</Text>
            </Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            disabled={!canSubmit}
            onPress={() => router.navigate('/')}
            style={[
              style.submit,
              { backgroundColor: canSubmit ? "#53b175" : "#a5d6a7" },
            ]}
          >
            <Text style={style.submittext}>Sign Up</Text>
          </TouchableOpacity>

          {/* Already have account */}
          <View style={style.dontHold}>
            <Text>
              Already have an account?{" "}
              <Text style={style.dHtext} onPress={() => router.navigate('/mainLogin')}>Log In</Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUP;

const style = StyleSheet.create({
  byContinue: {
    width: '90%',
    marginTop: 25,
  },
  dontHold: { marginTop: 15 },
  dHtext: { color: '#53b175' },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#7c7c7c",
  },
  inputs: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    flexDirection: 'row',
  },
  icons: { paddingLeft: 8 },
  email: { width: '90%', gap: 5, marginTop: 20 },
  emails: {
    width: '90%',
    gap: 5,
    marginTop: 40,
    borderBottomWidth: 1,
    borderColor: '#7c7c7c',
  },
  div: { flexDirection: 'row', alignItems: 'center' },
  bgimg: { width: '100%', height: '100%' },
  emailtext: { color: '#7c7c7c', fontSize: 15.9, fontWeight: '600' },
  input: { fontSize: 16 },
  main: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  TopImg: { backgroundColor: 'red', width: '100%', height: '25%' },
  TopImgs: { alignItems: 'center', justifyContent: 'center', marginTop: -120 },
  LogIn: { marginTop: '30%', width: '90%' },
  logtext: {
    color: '#181725',
    fontSize: 25.9,
    fontWeight: '600',
    marginBottom: 18,
  },
  submit: {
    width: '90%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '14%',
  },
  submittext: { color: 'white', fontSize: 18, fontWeight: '600' },
  errorText: { color: 'red', fontSize: 13, marginTop: 4 },
});
