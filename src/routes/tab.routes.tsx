import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../styles/colors'
import { PlantSelect } from '../pages/PlantSelect'
import { MaterialIcons } from '@expo/vector-icons'
import { MyPlants } from '../pages/MyPlants'

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
    return (
        <AppTab.Navigator 
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 20,
                    height: 88
                }
            }}
        >
            <AppTab.Screen 
                name="Nova planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ ...rest }) => (
                        <MaterialIcons name="add-circle-outline" {...rest} />
                    ))
                }}
            />
             <AppTab.Screen 
                name="Minhas plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ ...rest }) => (
                        <MaterialIcons name="format-list-bulleted" {...rest} />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes
