import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity, FlatList } from 'react-native';
import colors from "./Colors";
import {AntDesign} from "react-native-vector-icons";
import tempData from "./tempData";
import TodoList from "./Components/TodoList"
export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
            <View style={styles.divider}/>
            <Text style={styles.title}>
            Todo <Text style={{fontWeight:'300',color:colors.blue}}>Lists</Text>
           </Text>
           <View style={styles.divider}/>
        
        </View>

        <View style={{marginVertical:48}}>
            <TouchableOpacity style={styles.addList}>
              <AntDesign name="plus" size={16} color={colors.blue}/>
            </TouchableOpacity>
            <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height:275,paddingLeft:32}}>
          <FlatList data={tempData} 
          keyExtractor={item=>item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=> <TodoList list={item}/>}
          />
         </View>
      </View>
      
      
    );
  }

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    backgroundColor:colors.lightBlue,
    height:1,
    flex:1,
    alignSelf:"center"
  },
  title:{
    fontSize:30,
    fontWeight:"800",
    color:colors.black,
    paddingHorizontal:64
  },

  addList:{
    borderWidth:2,
    borderColor:colors.lightBlue,
    borderRadius:4,
    padding:16,
    // alignItems:"center",
    // justifyContent:"center"
  },
  add:{
    color:colors.blue,
    fontWeight:"600",
    fontSize:14,
    marginTop:8,
    
  }

});
