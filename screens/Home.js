import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import styles from './GlobalStyles'

import { useNavigation } from "@react-navigation/native";


export default function Home(){
  const { navigate } = useNavigation();
  

  return(
    <View style={styles.container}>
      <Text style={styles.title}>The Middle 😎</Text>
      <ScrollView style={styles.lista}>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 1)}>
           <Text>1ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 2)}>

           <Text>2ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 3)}>

           <Text>3ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 4)}>

           <Text>4ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 5)}>

           <Text>5ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 6)}>

           <Text>6ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 7)}>

           <Text>7ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 8)}>

           <Text>8ª Temporada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Temporada', 9)}>

           <Text>9ª Temporada</Text>
        </TouchableOpacity>
        
      </ScrollView>

    </View>
  )
}

