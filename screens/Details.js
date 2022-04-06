import React from 'react'
import {Text,View,SafeAreaView,Image,StatusBar,FlatList} from 'react-native'
import { Colors,SIZES,SHADOWS,FONTS,assets, COLORS } from '../constants'
import { CircleButton,RectButton,SubInfo,FocusedStatusBar,DetailsDesc,DetailsBid } from '../components' 

const Details = ({route,navigation}) => {
  const DetailsHeader = ({data,navigation}) => ( 
    <View style={{  width: '100%',height:373 }}>
        <Image 
        source={data.image}
        resizeMode="cover"
        style={{ width: '100%',height:"100%" }}
        />
        <CircleButton 
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
        <CircleButton 
          imgUrl={assets.heart}          
          right={15}
          top={StatusBar.currentHeight + 10}
        />
    </View>
    )
  // console.log(route); it passes data from home screen
  const {data }= route.params;
  return ( 
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(255,255,255,0.5)',
        zIndex:1,
      }}>
        <RectButton minWidth={170} fonstSize={SIZES.large}{...SHADOWS.dark} />
      </View>
     <FlatList 
        data={data.bids} 
        renderItem = {({item})=><DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:SIZES.extraLarge * 3}}
        ListHeaderComponent={ () => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{padding:SIZES.font}}>
               <DetailsDesc data={data}/>
               {data.bids.length > 0 && (
                 <Text style={{
                   fontSize:SIZES.small,
                   fontFamily:FONTS.semiBold,
                   color:COLORS.primary,
                 }}>Current Bid</Text>
               )                 
               }
            </View>
          </React.Fragment>
        )}
      />
      
    </SafeAreaView>
  )
}

export default Details