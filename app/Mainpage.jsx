import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Mainpage = () => {
  return (
    <ScrollView>
    <View style={styles.main}>
    </View>
    </ScrollView>
  )
}

export default Mainpage

const styles=StyleSheet.create({
 main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
 }
})