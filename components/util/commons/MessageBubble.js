import { View,StyleSheet, Text} from "react-native";
import { scale,moderateScale } from "react-native-size-matters";

import React from 'react'
import Svg, { Path } from "react-native-svg";

class MessageBubble extends React.Component {
    render(){
         return (
            <View style={[
                styles.message,
                this.props.mine ? styles.mine : styles.not_mine
            ]}>

            <View 
               style={[
                styles.cloud,
                {
                    backgroundColor: this.props.mine ? '#dddddd' : '#007aff'
                }
               ]}>
                {
                    this.props.image
                    ?
                      <Image
                        style={{alignSelf: this.props.mine? 'flex-start' : 'flex-end'}}
                        borderRadius={10}
                        source={this.props.image}
                        />
                    : 
                    null
                }
                {
                    this.props.text
                    ?
                    <Text
                    style={[
                        styles.text,
                        {
                            color: this.props.mine? 'black' : 'white'
                        }
                    ]}
                    >
                        {this.props.text}
                    </Text>
                    :
                    null
                }
              <View style={[
                 styles.arrow_container,
                 this.props.mine ? styles.arrow_left_container : styles.arrow_right_container
              ]}>
                
              </View>

  
              </View>

             
            </View>
         )
    }
}

export default MessageBubble

const styles = StyleSheet.create({
    message: {
        flexDirection : 'row',
        marginVertical : moderateScale(7,2)
    },
    mine : {
        marginLeft: 20,
    },
    not_mine: {
        alignSelf : 'flex-end',
        marginRight: 20
    },
    cloud: {
        maxWidth: moderateScale(250,2),
        paddingHorizontal: moderateScale(10,2),
        paddingTop: moderateScale(5,2),
        paddingBottom: moderateScale(7,2),
        borderRadius: 20
    },
    text: {
        paddingTop: 3,
        fontSize: 17,
        lineHeight: 22
    },
    arrow_container: {
        position: 'absolute',
        top: 0,
        left:0,
        right: 0,
        bottom: 0,
        zindex: -1,
        flex: 1
    },
    arrow_left_container: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    arrow_right_container: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    arrow_left: {
        left: moderateScale(-6,0.5)
    },
    arrow_right: {
        right: moderateScale(-6, 0.5)
    }
})