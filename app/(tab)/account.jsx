import { View, Text, ScrollView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const account = () => {
  const details=[
    {id:1,iconName:'shopping-bag',name:'Orders'},
    {id:2,iconName:'credit-card',name:'My Details'},
    {id:3,iconName:'map-pin',name:'Delivery Address'},
    {id:4,iconName:'credit-card',name:'Payment Methods'},
    {id:5,iconName:'codepen',name:'Promo Code'},
    {id:7,iconName:'bell',name:'Notifications'},
    {id:8,iconName:'help-circle',name:'Help'},
    {id:9,iconName:'info',name:'About'},
  


  ]
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.userProfileMain}>
        <View style={styles.userProfile}>
          <View>
            <Image source={require('../../assets/images/profile.png')} style={{width:70,height:70,objectFit:'contain'}}> 

            </Image>
          </View>
          <View style={styles.aboutUser}>
            <View style={styles.usernames}> 
              <Text style={{fontSize:20,fontWeight:'400',color:'#181725'}}>Afar Hassan</Text>
              <EvilIcons name="pencil" size={27} color="#53B175" />
            </View>
            <View style={styles.useremail}>
              <Text style={{fontSize:17,fontWeight:'400',color:'#7C7C7C'}}>Imshuvo97@gmail.com</Text>
            </View>
          </View>
        </View>
        </View>
       
       {details.map((lists)=>(
       <View style={styles.choices}>
         <View style={styles.choicesIn}>
          <View style={styles.orders}>
            <Feather name= {lists.iconName} size={24} color="#181725" />
            <Text style={{fontSize:18,fontWeight:'600',color:'#181725'}}>{lists.name}</Text>
          </View>
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#181725" />
          </View>
         </View>
       </View>
       ))}

    </View>
    </ScrollView>
  )
}

export default account

const styles =StyleSheet.create({
  userProfileMain:{
    width:'100%',
    borderBottomColor:'#E2E2E2',
    borderBottomWidth:1.5,
    alignItems:'center',
    justifyContent:'center'
  

  },
  orders:{
    flexDirection:'row',
    gap:15,
    alignItems:'center',
  },
  choicesIn:{
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  choices:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    borderBottomColor:'#E2E2E2',
    borderBottomWidth:1.5,
    height:70
  },
  usernames:{
    flexDirection:'row',
    gap:7,
  },
  aboutUser:{
    gap:2,

  },
  userProfile:{
    width:'90%',
    height:100,
    marginTop:'90',
    flexDirection:'row',
    gap:10,
    alignItems:'center'
  },
   main:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
   }
})