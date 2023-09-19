import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import blurBg from './src/assets/blur-bg.png'
import Stripes from './src/assets/stripes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { styled } from 'nativewind'
const StyledStripes = styled(Stripes)
export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-2"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />
        <View className="space-y-2">
          <Text className="font-title text-center text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="font-body text-center text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe com o
            mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-10"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="font-body text-center text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
