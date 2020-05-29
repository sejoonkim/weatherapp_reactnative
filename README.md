## Introduction

### Requirements

1. expo
   - Download `expo client` app from the App store
   - `npm install -g expo-cli`
     - expo cli quickstart

<br/>

### Expo vs RN CLI

- RN CLI

  - want more control over native files

  - IOS: xcode / Android: android studio

- Expo similar to `create-react-app`

  - hides native files
  - able to easily test on phone
  - Downside :arrow_down:
    - depend on the expo theme

<br/>

### Creating the Project

- `expo init <PROJECT NAME>`
  1. starting with `blank`
  2. check with `Expo client app`
- Files Created
  - `app.json`
    - config file that Expo will read
    - "platforms"
    - "splash"
    - "ios"
  - `App.js`
- `npm start`, `yarn start`

<br/>

### Getting to know Expo

- `Metro Bundler`
  - Builds for running in phones
- On the **SAME** wifi
- Live Reloading vs Hot Reloading
  - Live Reloading
    - save and refresh `automatically`
  - Hot Reloading
  - Shake phone or `CTRL + D` for **Developer Menu**
  - `Debug with JS`
    - could make the app slower

<br/>

### How does React Native Work?

- 3 ways of making Mobile Apps
  1. native = IOS - xcode, Android - Android Studio
  2. Webview based app
     - Cordova
     - PhoneGap
  3. RN
     - Bridge between JS and native
     - The Bridge could cause stalls
       - maybe only for content
     - styles follow CSS syntax
