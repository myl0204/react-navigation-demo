import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { px2p } from '../../../utils'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: px2p(15),
    right: px2p(15),
    backgroundColor: '#000',
    opacity: 0.2,
    width: px2p(39),
    height: px2p(19),
    borderRadius: px2p(10)
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    lineHeight: px2p(19)
  },
  big: {
    transform: [
      { scaleX: 2 },
      { scaleY: 2 },
    ],
    top: px2p(50),
    right: px2p(30)
  }
})

export default function NumberPagination(index, total, context) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{index + 1}/{total}</Text>
    </View>
  )
}

export function BigNumberPagination(index, total, context) {
  return (
    <View style={[styles.container, styles.big]}>
      <Text style={styles.text}>{index + 1}/{total}</Text>
    </View>
  )
}