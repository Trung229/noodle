/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';



const App= () => {
  const onSuccess = () =>{
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  }
  return (
    <SafeAreaView>
       <QRCodeScanner
        onRead={onSuccess}
        ref={(node) => { this.scanner = node }}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={{backgroundColor:"red", width:"100%", height:50}}>
            Go to{' '}
            <Text>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={{width:"100%", height:50, backgroundColor:"orange"}}>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

export default App;
