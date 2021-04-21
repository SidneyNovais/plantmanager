import React from 'react'
import { 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.button}
            {...rest}
        >
            <Text 
                style={styles.text}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: fonts.heading,
        color: colors.white,
        fontSize: 16
    }
})
