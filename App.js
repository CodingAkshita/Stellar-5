import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

function App() {
return(
  <NavigationContainer>
<Stack.Navigator initialRouteName = "Home" screenOptions = {{
  headerShown : false
}}>
<Stack.Screen name = "Home" component = {HomeScreen}/>
<Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
<Stack.Screen name = "StarMap" component = {StarMapScreen} />
<Stack.Screen name = "DailyPic" component = {DailyPicScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App