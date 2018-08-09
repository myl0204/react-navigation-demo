import React from 'react'
import { Image, SafeAreaView, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { common } from '../../../styles'
import { BigNumberPagination } from './NumberPagination'
import { px2p } from '../../../utils'

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  paginationStyle: {
    transform: [
      {scaleX: 2},
      {scaleY: 2}
    ]
  }
})

export default function(props) {
  function back() {
    props.navigation.goBack()
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: common.fff}}>
      <Swiper
        autoplay
        paginationStyle={{bottom: px2p(7)}}
        renderPagination={BigNumberPagination}>
        <TouchableWithoutFeedback onPress={back}>
          <Image source={require('../../../image/home/img_cp1.png')} style={styles.image}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={back}>
          <Image source={require('../../../image/home/img_cp1.png')} style={styles.image}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={back}>
          <Image source={require('../../../image/home/img_cp1.png')} style={styles.image}/>
        </TouchableWithoutFeedback>
      </Swiper>
    </SafeAreaView>
  )
}