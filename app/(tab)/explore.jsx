import { View, Text ,StyleSheet,ScrollView,TextInput,Image,TouchableOpacity} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import veg from '../../assets/images/veg.png'
import oil from '../../assets/images/oil.png'
import meat from '../../assets/images/meat.png'
import bakery from '../../assets/images/bakery.png'
import egg from '../../assets/images/egg.png'
import Beverages from '../../assets/images/Beverages.png'
import banana from '../../assets/images/banana.png'
import apple from  '../../assets/images/apple.png'
import gro1 from  '../../assets/images/gro1.png'
import gro2 from  '../../assets/images/gro2.png'
import gro3 from  '../../assets/images/gro3.png'
import pep from  '../../assets/images/pep.png'
import ginger from  '../../assets/images/ginger.png'
import beef from  '../../assets/images/beefBone.png'
import chicken from  '../../assets/images/chicken.png'
import rice from  '../../assets/images/rice.png'
import pulse from  '../../assets/images/pulsess.png'
import React, { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import coke from  '../../assets/images/coke.png'
import sprite from  '../../assets/images/sprite.png'
import appleJuice from  '../../assets/images/appleJuice.png'
import orangeJuice from  '../../assets/images/orangeJuice.png'
import coca from  '../../assets/images/cocacola.png'
import pepsi from  '../../assets/images/pepsi.png'
import egg1 from  '../../assets/images/egg1.png'
import egg2 from  '../../assets/images/egg2.png'
import egg3 from  '../../assets/images/egg3.png'
import egg4 from  '../../assets/images/egg4.png'
import egg5 from  '../../assets/images/egg5.png'
import egg7 from  '../../assets/images/egg7.png'
import egg8 from  '../../assets/images/egg8.png'

import { useCart } from "../context/CartContext"; 

const explore = () => {

  const products=[
    {id:1,image:veg,name:'Fresh Fruits & Vegetables'},
    {id:2,image:oil,name:'Cooking oil & Ghee'},
    {id:3,image:meat,name:'Meat & fruits'},
    {id:4,image:bakery,name:'Bakery & Snacks'},
    {id:5,image:egg,name:'Dairy & Eggs'},
    {id:7,image:Beverages,name:'Beverages'},
  ]

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allItemss=[
    {
      category:'Beverages',
      products: [
        {id:1,image:coke,name:'Diet Coke',piece:'35ml',price:'1.99'},
        {id:2,image:sprite,name:'Sprite can',piece:'35ml',price:'1.50'},
        {id:3,image:appleJuice,name:'Apple & Grape Juice',piece:'2L',price:'15.99'},
        {id:4,image:orangeJuice,name:'Orange Juice',piece:'2L',price:'15.99'},
        {id:5,image:coca,name:'Coca Cola Can',piece:'125ml',price:'4.99'},
        {id:8,image:appleJuice,name:'Apple & Grape Juice',piece:'2L',price:'15.99'},
        {id:9,image:orangeJuice,name:'Orange Juice',piece:'2L',price:'15.99'},
        {id:10,image:coca,name:'Coca Cola Can',piece:'125ml',price:'4.99'},
        {id:7,image:pepsi,name:'Pepsi Can',piece:'125ml',price:'4.99'},
      ]  
    },
    {
      category:'Dairy & Eggs',
      products: [
        {id:1,image:egg1,name:'Egg Chicken Red',piece:'35kg',price:'1.99'},
        {id:2,image:egg2,name:'Egg Chicken White',piece:'35kg',price:'1.50'},
        {id:3,image:egg3,name:'Egg Pasta ',piece:'2kg',price:'15.99'},
        {id:4,image:egg4,name:'Egg Noodles',piece:'2kg',price:'15.99'},
        {id:5,image:egg5,name:'Mayonaisse Eggless',piece:'1kg',price:'4.99'},
        {id:7,image:egg7,name:'Egg Baked',piece:'1.2kg',price:'4.99'},
        {id:9,image:egg3,name:'Egg Pasta ',piece:'2kg',price:'15.99'},
        {id:10,image:egg4,name:'Egg Noodles',piece:'2kg',price:'15.99'},
        {id:11,image:egg5,name:'Mayonaisse Eggless',piece:'1kg',price:'4.99'},
        {id:12,image:egg7,name:'Egg Baked',piece:'1.2kg',price:'4.99'},
        {id:8,image:egg8,name:'Egg Baked',piece:'1.2kg',price:'4.99'},
      ],      
    }
  ]

  const { addToCart } = useCart();

  const allProducts = allItemss.flatMap(item => item.products);

  const filteredSearchProducts = allProducts.filter(prod =>
    prod.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = allItemss.find(item => item.category === selectedProduct);

  return (
    <ScrollView >
      <View style={styles.main}>
        {selectedProduct === null && (
          <>
            <Text style={{
              marginTop:70,
              textAlign:'center',
              color:'#181725',
              fontSize:20,
              fontWeight:'400',
              width:"100%",
              alignItems:'center',
              justifyContent:'center'
            }}>
              Find Product
            </Text>

            <View style={styles.searchs}>
              <Feather name="search" size={24} color="black" />
              <TextInput 
                placeholderTextColor={'#7C7C7C'} 
                placeholder='Search Store' 
                style={{color:'black',height:'90%',width:'80%',fontSize:17}}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </>
        )}

        {searchQuery.length > 0 ? (
          <View style={[styles.borderMain,{marginTop:20}]}>
            {filteredSearchProducts.length > 0 ? (
              filteredSearchProducts.map(prod => (
                <View key={prod.id} style={styles.excluBorder}>
                  <View style={styles.Image1}>
                    <Image source={prod.image} style={{width:70, height:70, resizeMode:'contain'}} />
                  </View>
                  <View style={styles.organicBanans}>
                    <Text style={{color:'#181725',fontSize:16,fontWeight:'600'}}>{prod.name}</Text>
                    <Text style={{color:'#7C7C7C',fontSize:14,fontWeight:'600'}}>
                      {prod.piece}, Price
                    </Text>
                  </View>
                  <View style={styles.pricing}>
                    <Text style={{color:'#181725',fontSize:18,fontWeight:'600'}}>$ {prod.price}</Text>
                    <TouchableOpacity
                      style={{backgroundColor:'#53B175',padding:5,borderRadius:10}}
                      onPress={() => addToCart(prod)}   
                    >
                      <Ionicons name="add" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text style={{color:'gray',marginTop:20}}>No products found</Text>
            )}
          </View>
        ) : (
          <>
            {selectedProduct === null ? (
              <View style={styles.borderMain}>
                {products.map(lists => (
                  <TouchableOpacity  
                    key={lists.id+lists.name}
                    onPress={() => setSelectedProduct(lists.name)} 
                    style={[styles.styleborder,
                      {backgroundColor : lists.id % 2 == 0 ? "#e8f8eeb2" : lists.id % 3 == 0 ? "#723a031a" : "#f7dcd6ff", 
                       borderColor : lists.id % 2 == 0 ? "#c2fad8b2" : lists.id % 3 == 0 ? "#f7c7971a" : "#f8b7a8ff"}]}>
                    <View>
                      <Image source={lists.image} />
                      <Text style={{color:'black',fontSize:15,textAlign:'center',fontWeight:'400'}}>
                        {lists.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>  
            ) : (
              <View style={{width:'100%',alignItems:'center',justifyContent:"center",marginTop:10}}>
                <View style={{width:'90%',alignItems:'center',justifyContent:"space-between",height:80,marginTop:20,flexDirection:'row'}}>
                  <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => setSelectedProduct(null)}
                  >
                    <Feather name="arrow-left" size={24} color="#181725" />
                  </TouchableOpacity>
                  <Text>{selectedProduct}</Text>
                  <FontAwesome6 name="sliders" size={24} color="#181725" />
                </View>

                <View style={[styles.borderMain ,{marginTop:0}]}>
                  {filteredProducts && filteredProducts.products.map(prod => (
                    <View key={prod.id} style={styles.excluBorder}>
                      <View style={styles.Image1}>
                        <Image source={prod.image} style={{width:70, height:70, resizeMode:'contain'}} />
                      </View>
                      <View style={styles.organicBanans}>
                        <Text style={{color:'#181725',fontSize:16,fontWeight:'600'}}>{prod.name}</Text>
                        <Text style={{color:'#7C7C7C',fontSize:14,fontWeight:'600'}}>
                          {prod.piece}, Price
                        </Text>
                      </View>
                      <View style={styles.pricing}>
                        <Text style={{color:'#181725',fontSize:18,fontWeight:'600'}}>$ {prod.price}</Text>
                        <TouchableOpacity
                          style={{backgroundColor:'#53B175',padding:5,borderRadius:10}}
                          onPress={() => addToCart(prod)}   
                        >
                          <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </>
        )}
      </View>
    </ScrollView>
  )
}

export default explore

const styles =StyleSheet.create({
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
    width:'48%',
    height:220,
    borderWidth:1.5,
    borderColor:'#B3B3B3',
    borderRadius:10,
  },
  borderMain:{
    width:'90%',
    flexDirection:'row',
    gap:10,
    flexWrap: "wrap",   
    justifyContent: "space-between", 
    marginTop:30,
  },
  main:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  styleborder:{
    gap:20,
    borderRadius:12,
    width:'48%',
    height:190,
    borderWidth:1.5,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  searchs:{
    width:'90%',
    backgroundColor:'#d2d8d4ff',
    padding: 10,
    borderRadius:8,
    flexDirection:'row',
    gap:7,
    marginTop:25,
  },
})
