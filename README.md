## Introduction

### App Images

![clear](https://github.com/sejoonkim/weatherapp_reactnative/weatherapp_reactnative/assets/clear.png) ![rain](https://github.com/sejoonkim/weatherapp_reactnative/weatherapp_reactnative/assets/rain.png) ![cloudy](https://github.com/sejoonkim/weatherapp_reactnative/weatherapp_reactnative/assets/cloudy.png)

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

<br/>

<br/>

## Logic

### Layouts with Flexbox in React Native

- `flexDirection: column`

  - by default all flex containers have this setting

  - cf) web, default is row
  - in mobile phone, layout components are under each other

- How `flex container` works?
  - `flex: 1` - take all the space available

<br/>

### Loading Screen

- in `styles`
  - fontSize: 20
  - fontSize: "20px"

<br/>

### Getting the Location

- `Geolocation`
  - `getCurrentPosition()`
- can use `Expo's` API
  - not installed by Default
  - `expo install expo-location`

<br/>

### Ask for Permissions

- `await Location.requestPermissionsAsync();`
- save latitude and longitude information to `state`

<br/>

### Getting the Weather

- https://home.openweathermap.org/api_keys
  - get the API key by geographic coordinates
- fetch data with `Axios`
  - use `Backtick` around the URL
  - use `Template Literals`

<br/>

### Displaying Temperature

- change the units of temperature

- create `Weather.js`
- install prop-types
  - `npm install prop-types`
  - set `temp` to isRequired
- add `temp` to state by `setstate()`

<br/>

### Getting the Condition Names

- get the `weather condition codes` with icons

- condition proptypes

  - `Proptypes.oneof`

- `Weather.js`

  - add weather conditions

- `App.js`

  ```javascript
  const {
        data: {
          main: { temp },
          weather,
        },
  ```

  - ES6 syntax

<br/>

### Icons and Styling

- use `@expo/vector-icons` installed by default
- add `<View/>` to split the screen in half

<br/>

### Background Gradient

- It is easy to create `gradient` theme in CSS but hard in `React Native`
- `expo install expo-linear-gradient`

- `StatusBar`
  - invisible bridge
- handling each `weather conditions`
  - https://uigradients.com/#BoraBora

<br/>

### Titles and Subtitles

![src](https://github.com/sejoonkim/weatherapp_reactnative\weatherapp_reactnative\assets\flex-start.png)

- `alignItems: flex-start` - order each items to the top and left
