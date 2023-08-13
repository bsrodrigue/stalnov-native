module.exports = {
  "expo": {
    "name": "Bibliobooks",
    "slug": "bibliobooks",
    "description": "Bibliobooks is mobile application for writing, reading and sharing webnovels",
    "githubUrl": "https://github.com/bsrodrigue/stalnov-native",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#22A39F"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.bsrodrigue.bibliobooks"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "e5e15686-405f-4ad5-bda8-ad23272610e9"
      },
      "API_URL": "http://192.168.11.112:3000/api",
      "FIREBASE_API_KEY": process.env['EXPO_PUBLIC_FIREBASE_API_KEY'],
      "FIREBASE_AUTH_DOMAIN": process.env['EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN'],
      "FIREBASE_PROJECT_ID": process.env['EXPO_PUBLIC_FIREBASE_PROJECT_ID'],
      "FIREBASE_STORAGE_BUCKET": process.env['EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET'],
      "FIREBASE_MESSAGING_SENDER_ID": process.env['EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
      "FIREBASE_APP_ID": process.env['EXPO_PUBLIC_FIREBASE_APP_ID']
    }
  }
}
