import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from './components/settings';
import Search from './components/search';
import MyWords from './components/myWords';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.color}>Here is your word of the day!</Text>
        <Text>words words words</Text>

      </View>
    );
  }
}

export default TabNavigator(
  {
    Home: { screen: Home},
    Settings: { screen: Settings },
    Search: { screen: Search },
    Saved: { screen: MyWords }
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }else if (routeName === 'Saved') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
