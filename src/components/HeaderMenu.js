
import React from 'react'
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import { px2p } from '../utils'

const { width: deviceWidth, height: deviceHeight} = Dimensions.get('window')
const styles = StyleSheet.create({
  headerRightWrapper: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    right: 0,
    zIndex: 99
  },
  headerRight: {
    position: 'absolute',
    width: px2p(125),
    paddingLeft: px2p(8),
    paddingRight: px2p(8),
    paddingTop: px2p(5),
    
  },
  headerRightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#666666'
  },
  headerIcon: {
    width: px2p(15),
    height: px2p(15),
    resizeMode: Image.resizeMode.contain,
    marginLeft: px2p(14),
    marginRight: px2p(11)
  },
  headerItemText: {
    lineHeight: px2p(37),
    color: '#ffffff',
    fontSize: px2p(14)
  }
})

export default function HeaderRightDot(props) {
  const data = [
    {
      icon: require('../assets/headerRight/Icon_sy.png'),
      name: '首页',
      onPress: () => {
        props.navigation.navigate('Home')
      }
    },
    {
      icon: require('../assets/headerRight/Icon_spsc.png'),
      name: '商品收藏'
    },
    {
      icon: require('../assets/headerRight/Icon_yljl.png'),
      name: '游览记录'
    }
  ]

  return (
    <TouchableWithoutFeedback onPress={props.hideMenu}>
      <View style={[styles.headerRightWrapper]}>
      <ImageBackground source={require('../assets/headerRight/bg_pptc.png')} style={[styles.headerRight, {top: px2p(props.parentHeight - 6), right: px2p(props.parentWidth / 3)}]} resizeMode='cover'>
        <View>
          {
            data.map(item => (
              <TouchableOpacity style={styles.headerRightItem} onPress={item.onPress} key={item.name}>
                <Image source={item.icon} style={styles.headerIcon}/>
                <Text style={styles.headerItemText}>{item.name}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}