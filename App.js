
import React,{useState,useEffect} from 'react';
import { Text, View,StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import {Image} from 'react-native' ; 

const App = () => {
const [myRecepiesData,setMyRecepiesData]=useState();
const [isLoaded,setIsLoaded]=useState(true);
  const getRecepiesData = async () => {
    
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json"
      )
      const Recepiesdata = await response.json()
      setMyRecepiesData(Recepiesdata)
      setIsLoaded(false)
      console.log(Recepiesdata);
     
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(()=>{
    getRecepiesData();
  },[])


  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <Text style={{fontWeight: 'bold', fontSize:30,color:"#C71585", fontStyle:"italic" }} > 🍟Welcome To Foodie🍕</Text>
      </View>

      <FlatList 
      data={myRecepiesData}
      renderItem={({item})=>{
        return (
          <View >
          <View style={styles.card}>
             

            <View style={styles.imgContainer}>
              <Image style={styles.imgStyle}
              resizeMode="cover"
              source={{uri:item.imageURL }}/>
            </View>
            
            <View style={styles.bioDataContainer}>
            <View >
               <Text style={styles.bioData}>{item.name}</Text>
            </View>
             <View style={styles.mainContaine}>
               <Text style={{fontSize:20,
fontWeight:"bold",
fontFamily:"Gill Sans Extrabold",
marginBottom:40,
marginLeft:10,
marginRight:10,
textAlign: "justify",
color:"white"}}>{item.steps}</Text>
              </View>
              </View>

              

           </View>
           </View>
        
        
        );
        

      }
      
    }
      />
      
    </View>
  )
}
const styles=StyleSheet.create({
  loader:{
    minHeight:"100%",
    display:"flex",
    justifyContent:"center",
     alignItems:"center",
  },
 
  
  mainContainer:{
    width:"100%",
    paddingTop:50,
     backgroundColor:"#CCCC00",
     display:"flex",
    justifyContent:"center",
     alignItems:"center",
     
   },
  card:{
    width:300,
    backgroundColor:"#fff",
    borderRadius:5,
    marginvertical:20,
    marginBottom:"10%",
    display:"flex",
     flexDirection:"column",
    justifyContent:"space-between",
    
   },

   bioDataContainer:{
    width:"100%",
    
     alignItems:"center",
    
     backgroundColor:"olive",
    paddingvertical:10,
     fontFamily:"JosefinSans_400Regular",  
   },
   mainHeader:{
    textShadowOffset: { width: 10, height: 10 },
    textShadowColor: 'red',
    textTransform: 'uppercase',
    fontSize:10,
    color:"",
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginBottom:50,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    
    lineHeight: 80
    
    

   },
   imgContainer:{
    padding:10,
   },
   imgStyle:{
    width:"100%",
    height:300
   },
   bioData:{
    fontSize:30,
    color:"#613659",
    fontWeight:"bold",
    marginBottom:10,
    marginTop:10,
    fontFamily:"JosefinSans_400Regular",
   }

});
export default App;