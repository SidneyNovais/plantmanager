import React from 'react'
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'

import { 
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <Routes />
  )
}

export default App
