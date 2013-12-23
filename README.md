[ ~/Sites ]
➜ phonegap create phrase --name Phrase --id com.stinogle.phrase
[phonegap] created project at /Users/joy/Sites/phrase

[ ~/Sites ]
➜ cd phrase/

[ ~/Sites/phrase ]
➜ yo angular phrase

     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

Out of the box I include Bootstrap and some AngularJS recommended modules.

[?] Would you like to use Sass (with Compass)? Yes
[?] Would you like to include Twitter Bootstrap? No
[?] Which modules would you like to include? angular-cookies.js, angular-sanitize.js, angular-route.js angular-resource.js

[ ~/Sites/phrase ]
➜ mv www/config.xml app/

 •  Modify Grunt tasks such that the build lands in www/ var yeoman = {
    dist: 'www'     // Build folder: www/ (instead of dist/)
};

copy.dist.files.src: [
    'config.xml'    // <-- This file is needed for the cordova/phonegap build tool!
];
 
[ ~/Sites/phrase ]
➜ bower uninstall json3 --save
➜ bower uninstall es5-shim --save
➜ bower install angular-phonegap --save
➜ bower install angular-local-storage --save
➜ gem install compass
➜ gem install breakpoint

##Breakpoint setup

compass: {
  options: {
    require: ['breakpoint']
  }
}
