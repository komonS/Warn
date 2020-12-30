import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//import { Header } from 'react-native-elements';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './components/screen/Home'
import Login from './components/screen/Login';
import Footer from './components/template/Footer';
import Header from './components/template/Header';

import { LoginProvider } from './store/LoginProvider';

export default function App() {
  return (
    <LoginProvider>
      <NativeRouter>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </View>
          <Footer />
        </View>
      </NativeRouter>
    </LoginProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#C4C4C4'
  },
  content: {
    flex: 1
  }
})
