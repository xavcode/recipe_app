import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function WelcomeScreen({ navigation }) {
  return (

    <View style={styles.container}>
      <StatusBar style='dark' />
      <Image
        style={styles.image}
        source={require('../../assets/images/logo-welcome.png')}
      />
      <Text style={styles.title}> COOK LIKE A CHEF</Text>
      <Text style={styles.punchline}>All the meals in your hands!</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
        style={styles.btn}>
        <Text style={styles.btnText}>START!</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#FFA500",
  },
  punchline: {
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 18,
    color: 'white',
    paddingVertical: 18,
    width: '80%',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
  }
})