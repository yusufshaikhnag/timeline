import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './Screens/ChatScreen';
import TimelineScreen from './Screens/TimelineScreen';
import { View, Text } from 'react-native';


const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Timeline" component={TimelineScreen} />
    </Tab.Navigator>

);
};

export const Header = () => {
    return(
        <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8C43FE' }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Jenni Miranda</Text>
      </View>
    );
};

export default TabNavigator;
