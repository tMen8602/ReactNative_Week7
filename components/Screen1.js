import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
export default function AssetExample() {
  const [data,setData] =useState();
  useEffect(() =>{
    const fetchData = async() =>{
       try {
        const response = await fetch('https://66f60a4d436827ced975c265.mockapi.io/Banhang'); 
        const json = await response.json();
        setData(json); 
      } catch (error) {
        console.error(error);
      }
    }
  })
  return (
    <View style={styles.container}>
      <View style={{flex:1,alignItems:'center',paddingTop:"10px"}}>
        <Image style={{height:250,width:250}} source={require('../assets/snack-icon.png')} />
      </View>
      <View style={{flex:0.5,justifyContent:'flex-end'}}>
        <Text style={{fontSize:30,fontFamily:'bold',textAlign:'center'}}>MANAGE YOUR</Text>
      </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Image style={{height:50,width:50}}  source= {require('../assets/snack-icon.png')}/>
        <TextInput style={{height:50,width:200}} placeholder="Enter your email"></TextInput>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:"#00BDD6",height:80,width:150,borderRadius:20,justifyContent:'center'}}>
          <Text style={{textAlign:'center',color:'white',fontSize:20}}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },

});
