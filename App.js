import React , { useState }from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import AddToDo from './component/AddToDo';
import Header from './component/Header';
import TodoItem from './component/TodoItem';

const App =()=>{
    const [todos,setTodos] = useState([
        {text:'buy',key:1},
            {text:'ok',key:2},
            {text:'ghff',key:3},
        ]
    );
    const presshandler =(key)=>{
      setTodos((todo)=>{return todo.filter((item)=>item.key!=key)})
    }
    const submithandler =(item)=>{
      setTodos((prve)=>{
        return[
         
          {text:item,key:Math.random().toString()} ,...prve
        ]
      })
    }
    return(
       <View style={styles.container}>
            <Header />
            <AddToDo submithandler={submithandler}/>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        keyExtractor={(item) => item.key }
                        renderItem={({item})=>
                        <TodoItem item={item} presshandler={presshandler}/>
                        }
                    />
                </View>
            </View>
       </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
        padding:40
    },
    list:{
        marginTop:10
    }
})
export default App