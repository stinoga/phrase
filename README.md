# Phrase
A Phrase guessing iOS game. Uses local word lists as well as remote APIs for unique, new word lists that update daily.

## The Stack
Phonegap, AngularJS, Bower, SASS, Yeoman

## Setup
```Shell
$ npm install -g yeoman generator-angular phonegap cordova ios-sim && gem install bundler
$ phonegap create phrase --name Phrase --id com.stinogle.phrase2
$/phrase npm install
$/phrase npm install
$/phrase bower install
$/phrase bundle install
```

## Run locally
```Shell
grunt serve
```

## Build and build project (ios example)
```Shell
grunt build && phonegap build ios
```

## Build and run emulator or connected device
```Shell
grunt build && phonegap run ios
```

## PhoneGap Plugins/Platforms
Plugins are added when any platform is added via cordova CLI:
```Shell
cordova platform add ios
```
