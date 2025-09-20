import { Platform } from "react-native";

export const ASSETS = {
  backgrounds: {
    diamondsLight: require('@/assets/images/backgrounds/diamonds-light.png'),
    escheresque: require('@/assets/images/backgrounds/escheresque.png'),
    gplay: require('@/assets/images/backgrounds/gplay.png'),
    shattered: require('@/assets/images/backgrounds/shattered.png'),
    triangles: require('@/assets/images/backgrounds/wallet-pattern.png'),
  },
  backgroundURIs: {
    triangles: 'https://www.transparentpng.com/thumb/pattern/p3NBVZ-data-security-and-privacy-software-services-safe-data.png'
  }
}

export const AVATAR_PLACEHOLDER = 'https://blush.design/api/download?shareUri=lteICi5EINGks-JD&c=Backdrop_0%7E9fe1c4_Hair_0%7E4a312c_Skin_0%7Ed4a181_Top_0%7Ee65ed4&w=800&h=800&fm=png';

export const WALLET_PATTERNS_BG = Platform.select({
  ios: { uri: ASSETS.backgroundURIs.triangles },
  android: ASSETS.backgrounds.triangles,
});
