import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import FetchScreen from './components/FetchScreen';
class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Profile Screen</Text>
        </View>
    );
  }
}
class ImageScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Image Screen</Text>
            </View>
        );
    }
}
class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Cart Screen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { screen: HomeScreen,
            navigationOptions:{
                tabBarLabel:'Home',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>),
            }
        },
        About: { screen: AboutScreen,
            navigationOptions:{
                tabBarLabel:'About',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-information-circle-outline'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#f69b31' },
            }
        },
        Profile: { screen: ProfileScreen,
            navigationOptions:{
                tabBarLabel:'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#67baf6' },
            }
        },
        Details: { screen: FetchScreen,
                    navigationOptions:{
                        tabBarLabel:'Details',
                        tabBarIcon: ({ tintColor }) => (
                            <View>
                                <Icon style={[{color: tintColor}]} size={25} name={'ios-list'}/>
                            </View>),

                    }
                },
        Contact: {
            screen: ContactScreen,
            navigationOptions:{
                tabBarLabel:'Contact',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-mail'}/>
                    </View>),
            }
        },
    },
    {
      initialRouteName: "Home",
      activeColor: '#f0edf6',
      inactiveColor: '#226557',

      barStyle: { backgroundColor: '#3BAD87' },
    },
);

export default createAppContainer(TabNavigator);
