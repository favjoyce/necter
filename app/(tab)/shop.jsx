import { 
  View, Text, Keyboard, ScrollView, StyleSheet, Image, TextInput, 
  KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity 
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import { Platform } from "react-native";
import banana from '../../assets/images/banana.png';
import apple from  '../../assets/images/apple.png';
import gro1 from  '../../assets/images/gro1.png';
import gro2 from  '../../assets/images/gro2.png';
import gro3 from  '../../assets/images/gro3.png';
import pep from  '../../assets/images/pep.png';
import ginger from  '../../assets/images/ginger.png';
import beef from  '../../assets/images/beefBone.png';
import chicken from  '../../assets/images/chicken.png';
import rice from  '../../assets/images/rice.png';
import pulse from  '../../assets/images/pulsess.png';
import { useCart } from "../context/CartContext"; // adjust path


const shop = () => {
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const exluxiveStyle=[
    {id:1,image:banana,name:'Organic Bananas',piece:'7 pcs',price:'4.99'},
    {id:2,image:apple,name:'Red Apple',piece:'1kg',price:'4.99'},
    {id:3,image:gro1,name:'Cabbage',piece:'8 pcs',price:'4.99'},
    {id:4,image:gro2,name:'Crossiants',piece:'5 kg',price:'4.99'},
    {id:5,image:gro3,name:'Eggs',piece:'2 crates',price:'4.99'}
  ];

  const pulses=[
    {id:1,image:pulse,name:'pulse'},
    {id:2,image:rice,name:'Rice',piece:'1kg',price:'4.99'},
    {id:3,image:gro1,name:'Cabbage',piece:'8 pcs',price:'4.99'},
    {id:4,image:gro2,name:'Crossiants',piece:'5 kg',price:'4.99'},
    {id:5,image:gro3,name:'Eggs',piece:'2 crates',price:'4.99'}
  ];

  const bestStyle=[
    {id:1,image:pep,name:'Chilli, Pepper',piece:'7 pcs',price:'4.99'},
    {id:2,image:ginger,name:'Ginger',piece:'1kg',price:'4.99'},
    {id:3,image:gro1,name:'Cabbage',piece:'8 pcs',price:'4.99'},
    {id:4,image:gro2,name:'Crossiants',piece:'5 kg',price:'4.99'},
    {id:5,image:gro3,name:'Eggs',piece:'2 crates',price:'4.99'}
  ];
   
  const Groceries=[
    {id:1,image:beef,name:'Beef Bone',piece:'7 pcs',price:'4.99'},
    {id:2,image:chicken,name:'Broiler Chicken',piece:'1kg',price:'4.99'},
    {id:3,image:gro1,name:'Cabbage',piece:'8 pcs',price:'4.99'},
    {id:4,image:gro2,name:'Crossiants',piece:'5 kg',price:'4.99'},
    {id:5,image:gro3,name:'Eggs',piece:'2 crates',price:'4.99'}
  ];

  return (
    <View style={{flex:1}}>
      {selectedProduct ? (
        // PRODUCT DETAIL PAGE
        <ScrollView contentContainerStyle={{alignItems:'center',padding:30,marginTop:30}}>
          <TouchableOpacity onPress={() => setSelectedProduct(null)} style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
            <Ionicons name="arrow-back" size={28} color="black" />
            <Feather name="share" size={24} color="black" />

          </TouchableOpacity>

          <Image source={selectedProduct.image} style={{width:220,height:220,resizeMode:'contain',marginTop:20}} />

          <Text style={{fontSize:22,fontWeight:'700',marginTop:20}}>
            {selectedProduct.name}
          </Text>
          <Text style={{fontSize:16,color:'#7C7C7C'}}>
            {selectedProduct.piece}, Price
          </Text>

          <Text style={{fontSize:24,fontWeight:'bold',marginTop:10}}>${selectedProduct.price}</Text>

          <TouchableOpacity
            onPress={() => {
              if (favourites.includes(selectedProduct.id)) {
                setFavourites(favourites.filter(f => f !== selectedProduct.id));
              } else {
                setFavourites([...favourites, selectedProduct.id]);
              }
            }}
            style={{marginTop:15}}
          >
            <Ionicons 
              name={favourites.includes(selectedProduct.id) ? "heart" : "heart-outline"} 
              size={32} 
              color={favourites.includes(selectedProduct.id) ? "red" : "black"} 
            />
          </TouchableOpacity>

          {/* Add to Basket button */}
          <TouchableOpacity 
            style={{backgroundColor:'#53B175',padding:15,borderRadius:10,marginTop:20,width:'90%',alignItems:'center'}}
            onPress={() => addToCart(selectedProduct)}
          >
            <Text style={{color:'#fff',fontSize:18,fontWeight:'600'}}>Add To Basket</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (

        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.main}>
                <View style={styles.imgTop}>
                  <Image style={{width:30,height:30,resizeMode:'contain'}} source={require('../../assets/images/redcarrot.png')}/>
                </View>

                <View style={styles.locate}> 
                  <Ionicons name="location" size={20} color="#4C4F4D" />
                  <Text style={{color:'#4C4F4D',fontSize:17,fontWeight:'600'}}>Lagos,Nigeria</Text>
                </View>

                <View style={styles.searchs}>
                  <Feather name="search" size={24} color="black" />
                  <TextInput 
                    placeholderTextColor={'#7C7C7C'} 
                    placeholder='Search Store' 
                    style={{color:'black',height:'90%',width:'80%',fontSize:'17'}}
                  />
                </View>

                <View style={styles.Headpic}> 
                  <Image style={{width:'100%',resizeMode:'contain'}} source={require('../../assets/images/banner.png')}/>
                </View>
  
                {/* Exclusive Offer */}
                <View style={styles.exclusive}>
                  <Text style={{fontSize:24,fontWeight:'600',color:'#181725'}}>Exclusive Offer</Text>
                  <Text style={{fontSize:15.9,fontWeight:'600',color:'#53B175'}}>See all</Text>
                </View>
                
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width:'90%'}}>
                  <View style={styles.exclu}>
                    {exluxiveStyle.map((list)=>(
                      <TouchableOpacity key={list.id} onPress={() => setSelectedProduct(list)}>
                        <View style={styles.excluBorder}>
                          <View style={styles.Image1}>
                            <Image source={list.image} style={{width:70,resizeMode:'contain'}} />
                          </View>
                          <View style={styles.organicBanans}>
                            <Text style={{color:'#181725',fontSize:16,fontWeight:'600'}}>{list.name}</Text>
                            <Text style={{color:'#7C7C7C',fontSize:14,fontWeight:'600'}}>{list.piece}, Price</Text>
                          </View>
                          <View style={styles.pricing}>
                            <Text style={{color:'#181725',fontSize:18,fontWeight:'600'}}>$ {list.price}</Text>
                            <TouchableOpacity 
                              style={{backgroundColor:'#53B175',padding:5,borderRadius:10}}
                              onPress={() => addToCart(list)}
                            >
                              <Ionicons name="add" size={20} color="white" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>

                {/* Best Selling */}
                <View style={[styles.exclusive, {marginTop:30}]}>
                  <Text style={{fontSize:24,fontWeight:'600',color:'#181725'}}>Best Selling</Text>
                  <Text style={{fontSize:15.9,fontWeight:'600',color:'#53B175'}}>See all</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width:'90%'}}>
                  <View style={styles.exclu}>
                    {bestStyle.map((list)=>(
                      <TouchableOpacity key={list.id} onPress={() => setSelectedProduct(list)}>
                        <View style={styles.excluBorder}>
                          <View style={styles.Image1}>
                            <Image source={list.image} style={{width:70,resizeMode:'contain'}} />
                          </View>
                          <View style={styles.organicBanans}>
                            <Text style={{color:'#181725',fontSize:16,fontWeight:'600'}}>{list.name}</Text>
                            <Text style={{color:'#7C7C7C',fontSize:14,fontWeight:'600'}}>{list.piece}, Price</Text>
                          </View>
                          <View style={styles.pricing}>
                            <Text style={{color:'#181725',fontSize:18,fontWeight:'600'}}>$ {list.price}</Text>
                            <TouchableOpacity 
                              style={{backgroundColor:'#53B175',padding:5,borderRadius:10}}
                              onPress={() => addToCart(list)}
                            >
                              <Ionicons name="add" size={20} color="white" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>

                {/* Groceries Pulses */}
                <View style={[styles.exclusive, {marginTop:30}]}>
                  <Text style={{fontSize:24,fontWeight:'600',color:'#181725'}}>Groceries</Text>
                  <Text style={{fontSize:15.9,fontWeight:'600',color:'#53B175'}}>See all</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pules}>
                  {pulses.map((lists)=>(
                    <View key={lists.id} style={[
                      styles.mainPulse,
                      {backgroundColor : lists.id % 2 === 0 ? '#96c2a6ff': '#f5cea4ff'}
                    ]}>
                      <Image source={lists.image} />
                      <Text style={{color:'#181725',fontSize:20,fontWeight:'600'}}>{lists.name}</Text>
                    </View>
                  ))}
                </ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width:'90%'}}>
                  <View style={styles.exclu}>
                    {Groceries.map((list)=>(
                      <TouchableOpacity key={list.id} onPress={() => setSelectedProduct(list)}>
                        <View style={styles.excluBorder}>
                          <View style={styles.Image1}>
                            <Image source={list.image} style={{width:70,resizeMode:'contain'}} />
                          </View>
                          <View style={styles.organicBanans}>
                            <Text style={{color:'#181725',fontSize:16,fontWeight:'600'}}>{list.name}</Text>
                            <Text style={{color:'#7C7C7C',fontSize:14,fontWeight:'600'}}>{list.piece}, Price</Text>
                          </View>
                          <View style={styles.pricing}>
                            <Text style={{color:'#181725',fontSize:18,fontWeight:'600'}}>$ {list.price}</Text>
                            <TouchableOpacity 
                              style={{backgroundColor:'#53B175',padding:5,borderRadius:10}}
                              onPress={() => addToCart(list)}
                            >
                              <Ionicons name="add" size={20} color="white" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </View>
  );
};

export default shop;

const styles=StyleSheet.create({
  mainPulse:{
    borderRadius:10,
    width:220,
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginLeft:12
  },
  pules:{
    flexDirection:'row',
    gap:10,
    width: '90%',
    height:100,
    marginTop:10,
    marginBottom:10,
  },
  pricing:{
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  organicBanans:{
    width:'90%',
    gap:10,
    marginBottom:20,
  },
  Image1:{
    width:"90%",
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  excluBorder:{
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:220,
    borderWidth:1.5,
    borderColor:'#B3B3B3',
    borderRadius:10,
  },
  exclu:{
    width:'90%',
    flexDirection:'row',
    gap:10,
    marginTop:25,
    flexGrow:0,
  },
  exclusive:{
    width:'90%',
    height:30,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  Headpic:{
    width:'90%',
    height:140,
    backgroundColor:'transparent',
    marginTop:25,
    borderRadius:10,
    overflow:'hidden'
  },
  searchs:{
    width:'90%',
    backgroundColor:'#d2d8d4ff',
    padding: 10,
    borderRadius:8,
    display:'flex',
    flexDirection:'row',
    gap:7,
    marginTop:25,
  },
  locate:{
    flexDirection:'row',
    alignItems:"center",
    gap:2,
    marginTop:10
  },
  imgTop:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:59
  } ,
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
