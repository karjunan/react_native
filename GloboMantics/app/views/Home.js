import {StyleSheet, View} from 'react-native'
import Hero from '../components/Hero.js'

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Hero></Hero>
        </View>
    )
}

const style = StyleSheet.create( {
    container: {
        flex: 1
    }
})

export default HomeScreen;