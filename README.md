# Phrase
A Phonegap Catch Phrase game. Uses local word lists as well as remote APIs for unique, new word lists.

## Setup
```
npm install -g phonegap yeoman generator-angular
```

## Run locally
```
grunt serve
```

## Build and build project (ios example)
```
grunt build && phonegap build ios
```

## Build and run emulator or connected device
```
grunt build && phonegap run ios
```

## PhoneGap Plugins/Platforms
Plugins are added when any platform is added via cordova CLI:
```
cordova platform add ios
```
