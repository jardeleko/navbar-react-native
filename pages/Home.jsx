import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 160,
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})