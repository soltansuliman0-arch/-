# React Native Mobile Setup

## Installation

```bash
cd mobile
npm install
```

## Development

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## Build with EAS

```bash
npm run build
```

## Features

- ✅ Cross-platform (iOS, Android, Web)
- ✅ Bottom tab navigation
- ✅ Service browsing
- ✅ Order management
- ✅ Real-time messaging
- ✅ User profiles
- ✅ Redux state management
- ✅ Responsive design

## Project Structure

```
mobile/
├── src/
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.js
│   │   │   └── RegisterScreen.js
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── ServicesScreen.js
│   │   ├── ServiceDetailScreen.js
│   │   ├── OrdersScreen.js
│   │   ├── MessagesScreen.js
│   │   ├── ProfileScreen.js
│   │   └── DashboardScreen.js
│   ├── store/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── serviceSlice.js
│   │       ├── orderSlice.js
│   │       └── messageSlice.js
│   └── hooks/
│       └── useAuth.js
├── App.js
├── package.json
└── .env.example
```

## Requirements

- Node.js v14+
- Expo CLI (`npm install -g expo-cli`)
- iOS: Xcode (macOS) or iOS Simulator
- Android: Android Studio or Android Emulator

## Running the App

1. Install Expo CLI
2. Run `npm install` in the mobile directory
3. Run `npm start` to start the development server
4. Scan the QR code with Expo Go app or press 'a' for Android
