// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import { StyleSheet,Image, TouchableOpacity,Keyboard,KeyboardAvoidingView,Platform,TouchableWithoutFeedback} from 'react-native'
// import { Link, router } from 'expo-router'
// import { MaterialIcons } from '@expo/vector-icons'

// const login = () => {
//       const [open, setOpen] = useState(false);
//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
//               style={{ flex: 1 }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//     <View style={style.main}>
//               <View
//               style={{
//                 position: "absolute",
//                 top: 30,
//                 left: 15,
//                 right: 0,
//                 height: 80,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 paddingLeft: 10,
//                 zIndex: 10,
//               }}
//             >
//               <TouchableOpacity onPress={() => router.back()}>
//                 <Text>
//                    <MaterialIcons name="arrow-back-ios" size={28} color="black" />
//                 </Text>
//                  </TouchableOpacity>

                 
//             </View>
//             <View style={
//                     style.imageDiv
//                  }>
//              <Image source={require('../assets/images/illustration.png')}></Image>
//           </View>

//           <View style={style.select}><Text style={style.selectText}>Select Your Location</Text></View>
//           <View style={style.selects}>
//             <Text style={style.switch}>Switch on your location to stay in tune with  what’s happening in your area
//            </Text></View>

//            <View style={style.zones}>
//             <Text style={style.yourZone}>Your Zone</Text>
//             <View style={style.BanHold}>
//                 <Text style={style.ban}>Banasree</Text>
//                 <Text><MaterialIcons
//           name={open ? "arrow-drop-up" : "arrow-drop-down"} // MUI dropdown icons
//           size={24}
//           color="black"
//         /></Text>
//                 </View>
//            </View>

//          <View style={style.zoness}>
//             <Text style={style.yourZone}>Your Area</Text>
//             <View style={style.BanHold}>
//                 <Text style={style.yourZone}>Types of Your area</Text>
//                 <Text><MaterialIcons
//           name={open ? "arrow-drop-up" : "arrow-drop-down"} // MUI dropdown icons
//           size={24}
//           color="black"
//         /></Text>
//                 </View>
//            </View>
//        <TouchableOpacity onPress={() => router.navigate('/mainLogin')} style={style.submit}><Text style={style.submittext}>Submit</Text></TouchableOpacity>
//     </View>
//      </TouchableWithoutFeedback>

//     </KeyboardAvoidingView>
//   )
// }

// export default login

// const style =StyleSheet.create({
//     main:{
//         flex:1,
//         alignItems:'center',
//         // justifyContent:''
//     },
//     imageDiv:{
//         marginTop:'30%',
//         width:"80%",
//         // backgroundColor:'black',
//        alignItems:'center',
//     //    justifyContent:'center'


//     },
//     select:{
//         marginTop:'5%',

//     },
//     selects:{
//         marginTop:'4%'
//     },
//    selectText:{
//     fontSize:25.9,
//     fontWeight:'600',
//    },
//    switch:{
//  fontSize:15,
//     fontWeight:'400',
//     color:'#7c7c7c7c',
//     textAlign:'center'
//    },
//    zones:{
//     marginTop:'20%',
//     width:'90%',
//     gap:10,
//     borderBottomColor:'#e2e2e2e2',
//     borderBottomWidth:1,
//     paddingBottom:10
//    },
//     zoness:{
//     marginTop:'10%',
//     width:'90%',
//     gap:10,
//     borderBottomColor:'#e2e2e2e2',
//     borderBottomWidth:1,
//     paddingBottom:10
//    },
//    yourZone:{
//     color:'#7c7c7c',
//     fontSize:15.9,
//     fontWeight:'600'
//    },
//    BanHold:{
//     justifyContent:'space-between',
//     display:'flex',
//     // alignItems:'center'
//     flexDirection:'row'
//    },
//    ban:{
//     fontSize:18,
//     fontWeight:'400'
//    },
//    submit:{
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


import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const login = () => {
  const [openZone, setOpenZone] = useState(false);
  const [selectedZone, setSelectedZone] = useState("Banasree");

  const [openArea, setOpenArea] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Types of Your area");
const zones = [
  "North Central",
  "North East",
  "North West",
  "South East",
  "South South",
  "South West"
];

const areas = [
  "Abuja", "Kogi", "Kwara", "Benue", "Niger", "Plateau", "Nassarawa",
  "Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara",
  "Abia", "Anambra", "Ebonyi", "Enugu", "Imo",
  "Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo", "Rivers",
  "Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"
];

  const selectZone = (zone: string) => {
    setSelectedZone(zone);
    setOpenZone(false);
  };

  const selectArea = (area: string) => {
    setSelectedArea(area);
    setOpenArea(false);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => { setOpenZone(false); setOpenArea(false); }} accessible={false}>
        <View style={style.main}>
          <View style={{ position: "absolute", top: 30, left: 15, right: 0, height: 80, flexDirection: "row", alignItems: "center", paddingLeft: 10, zIndex: 10 }}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back-ios" size={28} color="black" />
            </TouchableOpacity>
          </View>

          <View style={style.imageDiv}>
            <Image source={require('../assets/images/illustration.png')} />
          </View>

          <View style={style.select}><Text style={style.selectText}>Select Your Location</Text></View>
          <View style={style.selects}>
            <Text style={style.switch}>
              Switch on your location to stay in tune with what’s happening in your area
            </Text>
          </View>

          {/* Zone Dropdown */}
          <View style={style.zones}>
            <Text style={style.yourZone}>Your Zone</Text>
            <TouchableOpacity style={style.BanHold} onPress={() => setOpenZone(!openZone)}>
              <Text style={style.ban}>{selectedZone}</Text>
              <MaterialIcons name={openZone ? "arrow-drop-up" : "arrow-drop-down"} size={24} color="black" />
            </TouchableOpacity>

            {openZone && (
              <FlatList
                data={zones}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity style={style.item} onPress={() => selectZone(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>

          {/* Area Dropdown */}
          <View style={style.zoness}>
            <Text style={style.yourZone}>Your Area</Text>
            <TouchableOpacity style={style.BanHold} onPress={() => setOpenArea(!openArea)}>
              <Text style={style.ban}>{selectedArea}</Text>
              <MaterialIcons name={openArea ? "arrow-drop-up" : "arrow-drop-down"} size={24} color="black" />
            </TouchableOpacity>

            {openArea && (
              <FlatList
                data={areas}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity style={style.item} onPress={() => selectArea(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>

          <TouchableOpacity onPress={() => router.navigate('/mainLogin')} style={style.submit}>
            <Text style={style.submittext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default login;

const style = StyleSheet.create({
  main: { flex: 1, alignItems: 'center' },
  imageDiv: { marginTop: '30%', width: "80%", alignItems: 'center' },
  select: { marginTop: '5%' },
  selects: { marginTop: '4%' },
  selectText: { fontSize: 25.9, fontWeight: '600' },
  switch: { fontSize: 15, fontWeight: '400', color: '#7c7c7c7c', textAlign: 'center' },
  zones: { marginTop: '20%', width: '90%', gap: 10, borderBottomColor: '#e2e2e2e2', borderBottomWidth: 1, paddingBottom: 10 },
  zoness: { marginTop: '10%', width: '90%', gap: 10, borderBottomColor: '#e2e2e2e2', borderBottomWidth: 1, paddingBottom: 10 },
  yourZone: { color: '#7c7c7c', fontSize: 15.9, fontWeight: '600' },
  BanHold: { justifyContent: 'space-between', display: 'flex', flexDirection: 'row' },
  ban: { fontSize: 18, fontWeight: '400' },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  submit: { width: '90%', height: 50, borderRadius: 12, backgroundColor: '#53b175', alignItems: 'center', justifyContent: 'center', marginTop: '14%' },
  submittext: { color: 'white', fontSize: 18, fontWeight: '600' },
});
