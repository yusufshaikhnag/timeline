import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import IconTimeLine from '../components/Timeline';
import { ScrollView } from 'react-native-virtualized-view'

const TimelineScreen = () => {
    const handlePress = () => {
        console.log('Button pressed!');
      };
  return (
    <ScrollView style={{padding: 20}}>
      <IconTimeLine/>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ backgroundColor: '#8C43FE', padding: 10, marginTop: 20, marginRight: 20, marginLeft:70 }}>
          <Text style={{ color: 'white' }}>Payment</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TimelineScreen;
