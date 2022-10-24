import { View, StyleSheet, Text, Image } from 'react-native';
import Icons from '../../assets/Icons/index.js';

export default function Header() {
  return (
    <View style={styles.rowContainer}>
      <Image source={Icons.menu.light} style={styles.menuImage}></Image>
      <Text style={styles.text}> ensom </Text>
      <Image source={Icons.sun} style={styles.menuImage}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  menuImage: {
    width: 48,
    height: 48
  },

  text: {
    fontFamily: 'SydneyBold',
    fontSize: 32
  },

  rowContainer: {
    paddingHorizontal: 10, 
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
})