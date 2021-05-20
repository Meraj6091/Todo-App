import React, { Component } from 'react'
import { Text, StyleSheet, View,KeyboardAvoidingView,TouchableOpacity ,TextInput} from 'react-native'
import {AntDesign} from "react-native-vector-icons";
import colors from "../Colors";
import colors2 from "../CreateTodoColors"
import tempData from '../tempData';
export default class AddListModal extends Component {
    backgroundColors=[ "#5CD859","#24A6D9","#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"];
    state={
       name:"",
       color:this.backgroundColors[4]
   };

   createTodo =()=>{
       const {name, color} = this.state;

       tempData.push({
           name,
           color,
           todos:[]
       });

       this.setState({name :""});
       this.props.closeModal();
   };

   renderColors(){
       return this.backgroundColors.map(color => {
           return(
               <TouchableOpacity key={color} style={[style.colorSelect,{backgroundColor:color}]} onPress={() => this.setState({color})}/>
           )
       })
   }
   
    render() {
        return (
           <KeyboardAvoidingView style={style.Container} behavior="padding">
               <TouchableOpacity style={{position:"absolute", top:64,right:32}} onPress={this.props.closeModal}>
                   <AntDesign name="close" size={24} color={colors.black}/>
               </TouchableOpacity>
               <View style={{alignSelf:"stretch", marginHorizontal:32}}>
               <Text style={style.title}>Create Todo List</Text>
               <TextInput style={style.input} placeholder="List Name?" onChangeText={text => this.setState({name:text})}/>
               <View style={{flexDirection:"row" , justifyContent:"space-between" , marginTop:12}}>
                  {this.renderColors()} 
               </View>
               <TouchableOpacity style={[style.create,{backgroundColor:this.state.color}]} onPress={this.createTodo}>
                    <Text style={{color:colors.white,fontWeight:"600"}}>Create</Text>
               </TouchableOpacity>     
               </View>
           </KeyboardAvoidingView>
        )
    }
}

const style = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:28,
        fontWeight:'800',
        color:colors.black,
        alignSelf:"center",
        marginBottom:16
    },
    input:{
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:colors.blue,
        borderRadius:6,
        height:50,
        marginTop:8,
        paddingHorizontal:16,
        fontSize:18
    },
    create:{
        marginTop:24,
        height:50,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
        
    },
    colorSelect:{
        width:30,
        height:30,
        borderRadius:4
    }
})
