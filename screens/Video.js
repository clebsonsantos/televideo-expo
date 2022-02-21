import React, {useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App({ route, navigation }) {
  const [ep, setEp] = useState(route.params ? route.params : {});

  return (
    <WebView 
      style={styles.container}
      source={{ uri: `https://play.midiaflixhd.com/tv/1422/${ep.temp}/${ep.ep}/dub` }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
