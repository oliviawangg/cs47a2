import { View, StyleSheet, Text, Image } from 'react-native';
import Icons from '../../assets/Icons';

export default function Footer() {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.imageWithText}> 
            <Image source={Icons.discover.light} style={styles.menuImage}></Image>
            <Text style = {styles.imageText}> Discover </Text>
        </View>

        <View style={styles.imageWithText}> 
            <Image source={Icons.heart.light} style={styles.menuImage}></Image>
            <Text style = {styles.imageText}> Matches </Text>
        </View>

        <View style={styles.imageWithText}> 
            <Image source={Icons.messages.light} style={styles.menuImage}></Image>
            <Text style = {styles.imageText}> DMs </Text>
        </View>

      </View>
    )
  }
  
  const styles = StyleSheet.create({
    menuImage: {
        width: 48,
        height: 48,
      },

      imageText: {
        fontFamily: 'SydneyBold',
        color: 'white',
      },

      imageWithText: {
        alignItems: 'center',
      },

      rowContainer: {
        paddingVertical: 10,
        backgroundColor: 'black',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-around',
      },
  })