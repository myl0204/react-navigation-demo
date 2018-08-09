import { Dimensions } from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height

export function px2p(size) {
    return size * deviceWidth / 375
}