import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { px2p } from '../../utils'

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{fontSize: px2p(42), textAlign: 'center'}}
        onPress={() => navigation.navigate('GoodDetail')}
      >
        去商品详情页
      </Text>
    </View>
  )
}