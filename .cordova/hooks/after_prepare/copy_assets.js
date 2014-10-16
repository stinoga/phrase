#!/usr/bin/env node

// This will copy all of our assets (Icons, splash screens, etc.) into their appropriate places when we build our app.
// Modify your source dir as needed.

var ncp = require('ncp').ncp,
    transfers = [
      {
        'source': './app/assets/iOS/icons',
        'destination': './platforms/ios/Pop Phrase/Resources/icons'
      },{
        'source': './app/assets/iOS/splash',
        'destination': './platforms/ios/Pop Phrase/Resources/splash'
      }
    ];

ncp.limit = 16;

transfers.forEach(function(transfer) {
  ncp(transfer.source, transfer.destination, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('====== Assets moved from ' + transfer.source + ' to ' + transfer.destination + ' ======');
  });
});
