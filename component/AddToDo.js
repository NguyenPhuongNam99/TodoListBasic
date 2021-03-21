import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput, Button} from 'react-native';

const AddToDo =({submithandler})=>{
    const [change,setChange] = useState('');
    return(
        <View>
            <TextInput 
            style={styles.input}
                placeholder='neww to do'
                onChangeText={(item)=>setChange(item)
                
                }
            />
            <Button title='add to do' onPress={()=>submithandler(change)}></Button>
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        marginHorizontal:15
    }
})
export default AddToDo