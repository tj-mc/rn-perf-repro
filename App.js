/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from "react";
import { Animated, View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";

const colors = ['#000000', '#212121']


const size = Dimensions.get("window").width / 10;

const Element = ({native = true}) => {

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [color, setColor] = React.useState(randomColor());

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {

      setColor(randomColor());
    }, Math.floor(Math.random() * 800));

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    Animated.timing(rotation, {
      toValue: Math.random(),
      duration: Math.floor(Math.random() * 1000),
      useNativeDriver: native,
    }).start();
  }, [color])

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '500deg']
  })


  return (
    <Animated.View style={{ width: size, height: size, backgroundColor: 'black', transform: [{rotate: spin}] }} />
  );
};

const Overlay = () => {

  return (
    <View style={{
      position: 'absolute',
      top: 200,
      width: 100,
      height: 100,
      backgroundColor: 'white',
    }}>
      <Text style={{paddingBottom: 20}}>
        Animated on the JS thread
      </Text>
      <Element native={false} infiniteSpin={true}/>
    </View>
  )
}

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      {new Array(1000).fill("").map((_, index) => <Element key={index} />)}
      <Overlay/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default App;
