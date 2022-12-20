import { StatusBar, SafeAreaView} from 'react-native';
import { 
  useFonts,  
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'; //importando fontes do google

import Cesta from './src/views/Cesta';
import mock from "./src/moks/cesta"; //importando todos os textos
import { useCallback} from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function App() {
  let [loadedFont] = useFonts({ //criando uma variavel para receber as fontes
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (loadedFont) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFont]);

  if (!loadedFont) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1}}/*** defindo o tamanho da tela */> 
      <StatusBar/>
      <Cesta {...mock} /*o mock é uma descontrução da cesta definido la no mocks cesta*//> 
    </SafeAreaView>
  );
}


