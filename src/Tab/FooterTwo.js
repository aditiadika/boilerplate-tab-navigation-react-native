import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FooterTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Footer Two </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});