import React from 'react'
import { 
    View,
    Text, 
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import { SafeAreaView } from 'react-native-safe-area-context'
import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export const Welcome: React.FC = () => {
    const navigation = useNavigation()

    const handleStart = () => {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'} suas plantas de {'\n'} forma fácil.
                </Text>

                <Image 
                    source={wateringImg} 
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text 
                    style={styles.subtitle}
                >
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                    activeOpacity={0.7} 
                    style={styles.button}
                    onPress={handleStart}
                >
                    <Feather name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 38,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        fontSize: 24,
        color:colors.white

    },
    image: {
        height: Dimensions.get('window').width * 0.7
    }
})
