import { TouchableOpacity,Text, View,Image } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const CircleButton =({imgUrl,handlePress,...props}) => {
    return (
      <TouchableOpacity      
      style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.extraLarge,
        position:"absolute",
        alignItems:"center",
        justifyContent:"center",
        ...SHADOWS.light,
        ...props,
      }}
        onPress={handlePress}
      >
        <Image source={imgUrl} resizeMode="contain" style={{width:24,height:24}}  />
      </TouchableOpacity>  
    )
}

export const RectButton =({minWidth,fonstSize,handlePress,...props}) => {
  return (
    <TouchableOpacity      
      style={{     
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.extraLarge,
        minWidth:minWidth,
        padding:SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{  
            fontFamily:FONTS.semiBold,
            fontSize:fonstSize,
            color:COLORS.white,
            textAlign:"center",
         }}>
          Place a bid
        </Text>
    </TouchableOpacity>
  )
}

 