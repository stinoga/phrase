# My initial setup steps

```
[ ~/Sites ]
➜ phonegap create phrase --name Phrase --id com.stinogle.phrase
➜ cd phrase/

[ ~/Sites/phrase ]
➜ yo angular phrase

[?] Would you like to use Sass (with Compass)? Yes
[?] Would you like to include Twitter Bootstrap? No
[?] Which modules would you like to include? angular-cookies.js, angular-sanitize.js, angular-route.js angular-resource.js

[ ~/Sites/phrase ]
➜ mv www/config.xml app/
➜ bower uninstall json3 --save
➜ bower uninstall es5-shim --save
➜ bower install angular-phonegap --save
➜ bower install angular-local-storage --save
➜ gem install compass
➜ gem install breakpoint
```

## Modify Grunt tasks such that the build lands in www/
```js
dist: 'www' // Build folder: www/ (instead of dist/)

copy.dist.files.src: [
  'config.xml'    // <-- This file is needed for the cordova/phonegap build tool!
];
```

##Breakpoint setup

compass: {
  options: {
    require: ['breakpoint']
  }
}
