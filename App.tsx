

import React from 'react';

import {
  FlatList,
 ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';







  
const App=()=>{
  const users=[
    {
      id:1,
      name: 'John',
      email:'john@gmail.com',
    },
    {
      id:2,
      name: 'Peter',
      email:'peter@gmail.com',
    },
    {
      id:3,
      name: 'Bob',
      email:'bob@gmail.com',
    }
  ]
  return (
    <View>
      <Text style={{fontSize:26}}>Component in Loop with flatList</Text>
      <FlatList
        data={users}
        renderItem={({item})=><UserData item={item}/>}
      />
    </View>
  );
}
const UserData=(props)=>{
  const item=props.item;
  return(
    <View style={styles.box}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
        </View>

  )
}

const styles = StyleSheet.create({
  item:{
    fontSize: 24,
    color:'orange',
    flex:1,
    margin:2,
    textAlign:'center'

  },
  box:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:'orange',
    marginBottom:10,
   

  }
 
});

export default App;
