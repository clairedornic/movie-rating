import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import Login from './src/components/Login'
import Logout from './src/components/Logout'
import Search from './src/components/Search'
import ListFilm from './src/components/ListFilm'
import AddFilm from './src/components/AddFilm'
import FilmItemCustom from './src/components/FilmItemCustom'
import FilmDetail from './src/components/FilmDetail'
import FilmDetailCustom from './src/components/FilmDetailCustom'


const ListFilmStack = createStackNavigator();

function ListFilmStackScreen() {
  return (
    <ListFilmStack.Navigator>
     <ListFilmStack.Screen name="My Films" component={ListFilm} />
     <ListFilmStack.Screen name="AddFilm" component={AddFilm} />
     <ListFilmStack.Screen name="FilmItem" component={FilmItemStackScreen} />
     <FilmItemStack.Screen name="Film details" component={FilmDetailCustom} />
    </ListFilmStack.Navigator>
   );
 }


const FilmItemStack = createStackNavigator();

function FilmItemStackScreen() {
  return (
    <FilmItemStack.Navigator>
     <FilmItemStack.Screen name="FilmItemCustom" component={FilmItemCustom} />
     <FilmItemStack.Screen name="FilmDetailCustom" component={FilmDetailCustom} />
    </FilmItemStack.Navigator>
   );
 }

 const SearchStack = createStackNavigator();

 function SearchStackScreen() {
   return (
     <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Film details" component={FilmDetail} />
     </SearchStack.Navigator>
    );
  }

const Tab = createBottomTabNavigator();


export default class App extends React.Component {
  render() {
  
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          animationEnabled="true"
          tabBarOptions={{
            showLabel: false, 
            style: {
              flex: 1,
              flexDirection: "column"
            },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case "My list":
                  iconName = focused ? "home" : "home-outline";
                  break;
                case "Login":
                  iconName = focused ? "person" : "person-outline";
                  break;
                case "Search":
                  iconName = focused ? "search" : "search-outline";
                  break;
                case "Log out":
                  iconName = focused ? "log-out" : "log-out-outline";
                  break;
                default:
                  iconName = "ban";
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="My list" component={ListFilmStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Log out" component={Logout} />
        </Tab.Navigator>
      </NavigationContainer>

    )
  }
}