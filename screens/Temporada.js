import React, {useState }from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import styles from './GlobalStyles'

import { useNavigation } from "@react-navigation/native";


export default function Temporada({ route, navigation }){
  const [user, setUser] = useState(route.params ? route.params : {});
  const { navigate } = useNavigation();



  return(
    <View style={styles.container}>
      <Text style={styles.title}>{user}ª Temporada</Text>
      <ScrollView style={styles.lista}>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 1})}>
           <Text>1 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 2 })}>
           <Text>2 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 3})}>
           <Text>3 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 4})}>
           <Text>4 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 5})}>
           <Text>5 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 6})}>
           <Text>6 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 7})}>
           <Text>7 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 8})}>
           <Text>8 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 9})}>
           <Text>9 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 10})}>
           <Text>10 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 11})}>
           <Text>11 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 12})}>
           <Text>12 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 13})}>
           <Text>13 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 14})}>
           <Text>14 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 15})}>
           <Text>15 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 16})}>
           <Text>16 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 17})}>
           <Text>17 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 18})}>
           <Text>18 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 19})}>
           <Text>19 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 20})}>
           <Text>20 Episódio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 21})}>
           <Text>21 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 22})}>
           <Text>22 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 23})}>
           <Text>23 Episódio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 24})}>
           <Text>24 Episódio</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.item} onPress={()=> navigate('Video', { temp: user, ep: 25})}>
           <Text>25 Episódio</Text>
        </TouchableOpacity> */}
        
      </ScrollView>

    </View>
  )
}

