import React from 'react'
import {
  TouchableOpacity,
  Image
} from 'react-native'
import HeaderMenu from './HeaderMenu'
import { px2p } from '../utils'

export default class HeaderRightDot extends React.Component {
  constructor() {
    super()
    this.state = {
      height: 0,
      width: 0,
      isMenuVisible: false
    }
  }

  updateLayout = ({nativeEvent: { layout }}) => {
    const { width, height } = layout
    this.setState({
      height,
      width
    })
  }

  showMenu = () => {
    this.setState({
      isMenuVisible: true
    })
  }

  hideMenu = () => {
    this.setState({
      isMenuVisible: false
    })
  }

  render() {
    const { height, width, isMenuVisible } = this.state
    return (
      <TouchableOpacity 
        onPress={this.showMenu}
        style={{padding: px2p(15)}}
        onLayout={this.updateLayout}
      >
        <Image source={require('../assets/headerRight/Icon_more.png')} style={{width: px2p(24), height: px2p(5)}}/>
        {
          isMenuVisible && (
            <HeaderMenu 
              parentWidth={width}
              parentHeight={height}
              hideMenu={this.hideMenu}
              navigation={this.props.navigation}
            />
          )
        }
      </TouchableOpacity>
    )
  }
  
}