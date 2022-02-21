import * as React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import {StatusBar} from 'react-native'

import { DeviceMotion } from 'expo-sensors';
import AppStack from './routes/AppStack';
export default function App() {

  const [ativo, setAtivo] = React.useState({});

   DeviceMotion.isAvailableAsync().then(response => setAtivo(() => response))
   if(ativo){
     async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }
    changeScreenOrientation()

   }

  return (
    <>
      <StatusBar barStyle={'default'} backgroundColor='#000' hidden={true}/>
      <AppStack/>
    </>
  );
}