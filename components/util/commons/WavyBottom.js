import React from 'react'
import { Dimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyBottom(props) {
  return (
    <View style={props.customStyles}>
      <View style={{height:160,marginTop: 280}}>
      <Svg viewBox="0 0 1440 320" 
          height="273%"
          width="100%">
        <Path fill={props.bottomColor} 
         d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></Path></Svg>
      
      </View>
      
      <View style={{height:160, backgroundColor: props.bottomColor,marginTop: 350 }}>
      </View>
      
    </View>
  )
}


