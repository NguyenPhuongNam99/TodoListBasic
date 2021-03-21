import React from 'react';
import { View,Text, TouchableOpacity,StyleSheet } from "react-native";

const TodoItem =({item,presshandler})=>{
    return(
        <TouchableOpacity onPress={()=>presshandler(item.key)}>
            <Text  style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    item:{
        borderColor:'#bbb',
        borderWidth:1,
        padding:30,
        marginTop:15,
        borderStyle:'dashed',
        borderRadius:10
    }
})
export default TodoItem