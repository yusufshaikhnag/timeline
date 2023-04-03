import React from 'react';

// import all the components we are going to use
import {StyleSheet, Text, View} from 'react-native';

// import Timeline
import Timeline from 'react-native-timeline-flatlist';

const IconTimeLine = () => {
  const data = [
    {
      time: '09:00',
      title: 'Shortlisting',
      description:
        'They have submitted their info.',
      lineColor: '#009688',
      icon: require('../img/icons8-number-1-48.png'),
    },
    {
      time: '10:45',
      title: 'Draft Approval',
      description:
        'You approved their draft.',
      icon: require('../img/icons8-number-2-48.png'),
    },
    {
      time: '12:00',
      title: 'Complete',
      description:
        'The Collaboration is complete',
      icon: require('../img/icons8-3-48.png')
    },
   
  ];

  //'rgb(45,156,219)'
  return (
    <View style={styles.container}>
      
      <Timeline
        data={data}
        circleSize={20}
        circleColor="rgba(0,0,0,0)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        innerCircle={'icon'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default IconTimeLine;