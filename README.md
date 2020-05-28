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
