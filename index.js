
import { ScrollView,View,Text,TextInput, TouchableOpacity,SafeAreaView,Pressable} from "react-native"
import { useState } from "react";

export default function App(){

  const {darkMode, setDarkMode} =useState(false);
    return(
      <View style={{flex:1,backgroundColor:darkMode ? "black" : "white"}}>

        
        <Pressable style={{backgroundColor:"blue",padding:15,borderRadius:10}} onPress={() => setDarkMode(!darkMode)}>
         <Text style={{padding:10,color:darkMode ? "white" : "black",fontSize:15}}> { darkMode ? "dark": "light" } </Text> 
        
        </Pressable>
        <Text style={{color:"#1877F2",textAlign:"center",fontSize:60,fontWeight:"700",marginBottom:10}}> facebook </Text>
        <Text style={{textAlign:"center",fontSize:16,}}> Facebook helps you connect and </Text>
        <Text style={{textAlign:"center",fontSize:16,paddingBottom:30,marginBottom:30}}> share with the people in your life. </Text>
     
     <TextInput style={{textAlign:"left",borderWidth:2,borderRadius:8,paddingBottom:20,marginBottom:15,marginHorizontal:10}} placeholder="Email address or phone number"/>
    <TextInput style={{textAlign:"left",borderWidth:2,borderRadius:8,paddingBottom:20,marginBottom:15,marginHorizontal:10}} placeholder="password" />
  <TouchableOpacity>
  <Text  style={{textAlign:"center",color:"#fff",fontWeight:"bold",fontSize:20,backgroundColor:"#1877F2",height:60,borderRadius:8,padding:15,marginHorizontal:10}}>Log In</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={{textAlign:"center",color:"#1877F2",padding:30,marginVertical:20}}> Forgot password? </Text>
  </TouchableOpacity>

<TouchableOpacity>
    <Text style={{textAlign:"center",color:"white",backgroundColor:"#42B72A",fontSize:20,fontWeight:"bold",borderCurve:40,borderRadius:8,height:50,padding:10,marginHorizontal:40}}>Create New Account</Text>

</TouchableOpacity>

<Text style={{textAlign:"center",paddingTop:20,fontSize:14,marginTop:25}}>Create a Page for a celebrity, band or business. </Text>
        
 </View>

    );




}