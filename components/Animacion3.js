import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

const Animacion3 = () => {
  const [ animacion ] = useState(new Animated.Value(12));

  useEffect( () => {
    Animated.timing(
      animacion, {
        toValue: 40,//valor al que llega
        duration: 500,//cantidad de tiempo en llegar
        useNativeDriver: false
      }
    ).start();
  }, [])

  return (
    <View>
        <Animated.Text 
            style={[ styles.text, { fontSize: animacion } ]}
        >
            Animación 3
        </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
})

export default Animacion3