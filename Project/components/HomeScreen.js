import React, { Component } from 'react';
import { Button, View, Text,Image, StyleSheet  } from 'react-native';
import {  createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

export default class HomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/home-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
         <Button
                  title="Contact Us"
                  onPress={() => this.props.navigation.navigate('Contact')}
                />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});