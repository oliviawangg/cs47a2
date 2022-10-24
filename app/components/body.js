import Profiles from "../../assets/Profiles"
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native"
import Icons from "../../assets/Icons"
import themes from "../../assets/Themes/themes"


export default function Body() {
  return (
    <View style={styles.body}>
        <ImageBackground source={Profiles.mtl.image} style={styles.Image} imageStyle={{borderRadius: 16}}>
            <Text style = {styles.mtl} > MTL </Text>
            <Text style = {styles.twomiles} > 2 miles away </Text>
        </ImageBackground>
        <View style={styles.audiobox}>
            <Text style={styles.audioboxText}>My hottest take</Text>
            <View style={styles.images}>
                <Image source={Icons.player.light} style={styles.playImage}></Image>
                <Image source={Icons.audioWave.light} style={styles.waveImage}></Image>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Image: {
        shadowColor: themes.light.shadows.shadowColor,
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowRadius: themes.light.shadows.shadowRadius,
        shadowOffset: themes.light.shadows.shadowOffset,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'space-between',
        aspectRatio: 1/1.1,
      },

      body: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-evenly',
      },
    
      audioboxText: {
        fontSize: 28,
        marginBottom: 10,
        fontFamily: 'Sydney',
      },

      audiobox: {
        shadowColor: themes.light.shadows.shadowColor,
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowRadius: themes.light.shadows.shadowRadius,
        shadowOffset: themes.light.shadows.shadowOffset,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
      },

      playImage: {
        resizeMode: 'contain',
        width: '20%',
        aspectRatio: 1
      },

      waveImage: {
        resizeMode: 'contain',
        width: '80%',
        aspectRatio: 4
      },

      images: {
        flexDirection: 'row',
        alignItems: 'center'
      },

      mtl: {
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: 48,
        position: 'relative',
      },

      twomiles: {
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: 24,
        position: 'relative',
        bottom: 5
      }
})