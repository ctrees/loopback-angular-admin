# ctrees hack of loopback-angular-admin
1. Setup
    - git clone https://github.com/ctrees/loopback-angular-admin.git
    - cd loopback-angular-admin
    - npm install
    - grunt build
    - npm start
    - browse to http://localhost:3000/
    - Open DevTools (so we can get an API token when login)
    - login admin@admin.com admin
    - Get token from network traffic monitor
    - browse to http://localhost:3000/explorer
    - paste token into setToken box
2. Mod some UI stuff to ID the project from it's fork
    - hack server/boot/01-load-settings.js
    - change appName value to: 'ctrees test'
    - change appTheme value to: 'skin-black'
    - grunt build
    - npm start
    - browse to http://localhost:3000/ login and verify changes
3. Mod to add new data model
    - Go to http://localhost:3000/#/app/sandbox/faker and click Posts
    - Go to http://localhost:3000/#/app/posts to verify you see data (this is what we will clone)
    - shutdown server
    - Create new common model and generate new lb-services.js
        - cp common/models/post.json common/models/poke.json
        - cleanup poke.json and add reference to server/model-config.json
        - cd client/app
        - mv js/lb-services.js js/lb-services_org
        - lb-ng ../../server/server.js js/lb-services.js
        - cd ../../
    - Create new model crud in UI
        - cp -R client/app/modules/posts client/app/modules/pokes
        - cleanup file and names in pokes tree
            - cd client/app/modules/pokes/
            - mv app.posts.js app.pokes.js
            - mv config/posts.config.js config/pokes.config.js 
            - mv config/posts.routes.js config/pokes.routes.js 
            - mv controllers/posts.ctrl.js controllers/pokes.ctrl.js 
            - mv services/posts.service.js services/pokes.service.js 
        - add to client/app/index.html
            - script src="/modules/pokes/app.pokes.js"></script
            - script src="/modules/pokes/config/pokes.config.js"></script
            - script src="/modules/pokes/config/pokes.routes.js"></script
            - script src="/modules/pokes/controllers/pokes.ctrl.js"></script
            - script src="/modules/pokes/services/pokes.service.js"></script
        - add com.module.pokes to client/app/js/app.js
    - grunt build
    - npm start
    - browse to http://localhost:3000/ login and verify changes
    - Test stuff
4. Next Step... ?? move to mysql db ??
5. Next Step... ?? behat testing ??
6. Next Step... ?? More seed data via faker ??
7. Next Step... ?? move to alternate css stuff ??





---
**This software is not ready for production! It is still being developed and it will change in the future.**
The goal is to have a starter project which can be used to quickly build an API with a frontend that are easily extended.

# loopback-angular-admin

[![Stories in Ready](https://badge.waffle.io/beeman/loopback-angular-admin.png?label=ready&title=Ready)](https://waffle.io/beeman/loopback-angular-admin)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/beeman/loopback-angular-admin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM version](https://badge.fury.io/js/loopback-angular-admin.png)](http://badge.fury.io/js/loopback-angular-admin)
[![Dependencies](https://david-dm.org/beeman/loopback-angular-admin.png)](https://david-dm.org/beeman/loopback-angular-admin)

[![Codeship Status for beeman/loopback-angular-admin](https://www.codeship.io/projects/63461bc0-396b-0132-3ad7-621226feddc2/status)](https://www.codeship.io/projects/42207)

[![wercker status](https://app.wercker.com/status/d5bf1a6b787b3c00633c02da0f9a48e5/s "wercker status")](https://app.wercker.com/project/bykey/d5bf1a6b787b3c00633c02da0f9a48e5)

[![Build Status](https://drone.io/github.com/beeman/loopback-angular-admin/status.png)](https://drone.io/github.com/beeman/loopback-angular-admin/latest)

## Try it now!

Deploy an instance on your Heroku account to play around with it!

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Users

After an installation the following users are created:

- **Admin user**: Email: ```admin@admin.com```, password: ```admin```
- **Regular user**: Email: ```user@user.com```:, password ```user```

Please note, at this moment there is no difference in permissions for admin users or regular users. This needs to change in the future!

## Features and implemented projects

- A LoopBack REST API with authentication enabled built on the [LoopBack Generator](https://www.npmjs.org/package/generator-loopback)
- A GUI built with AngularJS based on the [Angular Generator](https://github.com/yeoman/generator-angular)
- Angular UI-Router
- JSON-based based forms by [angular-formly](https://formly-js.github.io/angular-formly/)
- Notifications by [angular-toasty](https://github.com/Salakar/angular-toasty)
- File upload with [LoopBack storage services](https://github.com/strongloop/loopback-component-storage/)
- Admin template powered by [almasaeed2010/AdminLTE](https://github.com/almasaeed2010/AdminLTE)
- Markdown Editor with live preview with [angular-markdown-editor](https://github.com/JimLiu/angular-markdown-editor)
- Bunch of useful filters for AngularJS: [a8m/angular-filter](https://github.com/a8m/angular-filter)
- [t4t5/sweetalert](https://github.com/t4t5/sweetalert) provided by [oitozero/ngSweetAlert](https://github.com/oitozero/ngSweetAlert)
- Automatically growing textarea's by [monospaced/angular-elastic](https://github.com/monospaced/angular-elastic)
- Social authentication with [LoopBack passport](https://github.com/strongloop/loopback-component-passport/)
- Multi-language support by [rubenv/angular-gettext](https://github.com/rubenv/angular-gettext)
- User management
- Loading indicators [chieffancypants/angular-loading-bar](https://github.com/chieffancypants/angular-loading-bar)?

## TODO:

- Permissions on user actions (non-admins cannot access advanced functions)
- permissions on content items (non-admins can only edit own content, etc)
- Detect if API is online [HubSpot/offline](https://github.com/HubSpot/offline)?
- Map API roles to [Narzerus/angular-permission](https://github.com/Narzerus/angular-permission)
- Add tests
- Add Dockerfile
- Add Vagrantfile


[Tell me what we need more!](https://github.com/beeman/loopback-angular-admin/issues/new)

## Screenshots
#### Dashboard
![](screenshots/dashboard.png?raw=true)
#### Markdown Editor
![](screenshots/pages.png?raw=true)
#### SweetAlert
![](screenshots/sweetalert.png?raw=true)
#### File uploads
![](screenshots/files.png?raw=true)
#### Events
![](screenshots/events.png?raw=true)

## Installation

### Dependencies

Installation depends on `node`/`npm` with `grunt` and `bower` installed globally.

    $ npm install -g bower grunt-cli

### The one-liner install (please create an [issue](https://github.com/beeman/loopback-angular-admin/issues/new) if this one does not work!)

    git clone https://github.com/beeman/loopback-angular-admin.git && cd loopback-angular-admin && npm install && grunt build && grunt serve

### The steps above: 

### Checkout the project:

    git clone https://github.com/beeman/loopback-angular-admin.git

### Install the Node packages:

    npm install

### Run grunt build:

    grunt build
    
### Run grunt serve to start the API and frontend:

    grunt serve
    

## Running

The project is separated in a server and a client.

### Server

To run the server you issue the command:

    npm start

Or to run it with nodemon (needs `nodemon` installed globally). This will
automatically restart the server when you change its code:

    npm run dev

The command `grunt serve` explained below wil automatically start the API.

### Client

Rebuild the lb-services.js file with the correct `API_URL` for development.

    API_URL=http://0.0.0.0:3000/api grunt

To run the client you issue the command. This will also start the API.

    grunt serve

It will open the project in your default browser with livereload enabled.
This will take care of reloading the page when you change your code.

## Connect to a database

You can specify the URL to the MongoDB database you want to use with the `MONGODB_URL` environment variable.

    MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

Set `INITDB` to true if you want to load the initial dataset, which creates the admin user. The memory database (default) does this automatically.

    INITDB=true MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

This also works with the free hosted MongoDB instances at [compose.io](https://www.compose.io) and [mongolab.com](https://mongolab.com)!

## Development

If you want to share your work through a Pull Request, be sure to make it a clean branch (one functionality per PR) and base it off master.

If you plan on making a big change or replace a core function with something else it is probably best to first open an issue to discuss it with me. This will enhance the chance of the eventual changes getting merged a lot :)

The API is built with [generator-loopback](https://www.npmjs.org/package/generator-loopback).

The GUI is built with [generator-angular](https://www.npmjs.org/package/generator-angular) but is no longer compatible due to refactoring the project into modules.

These should help you quickly add code to your project. Further details tailored to this project might follow in the future.


## Unit Testing using Karma/Jasmine

    $ node_modules/.bin/karma start client/test/karma.conf.js

    INFO [karma]: Karma v0.12.31 server started at http://localhost:8080/
    INFO [launcher]: Starting browser PhantomJS
    INFO [PhantomJS 1.9.8 (Linux)]: Connected on socket aLJmRuSNUH2rPfpWgS3l with id 89641972
    PhantomJS 1.9.8 (Linux): Executed 1 of 1 SUCCESS (0.007 secs / 0.029 secs)



### Useful commits

These commits might be useful when extending the functionality.

- [Add support for MongoDB databases](https://github.com/beeman/loopback-angular-admin/commit/6b884e601d535ed64b4ef4f6f07e0f55d357a5b6)
- [Add custom method to the API](https://github.com/beeman/loopback-angular-admin/commit/eedbd03f755ddf2234872886ee390ac4f6753c64)
- [Rename a model](https://github.com/beeman/loopback-angular-admin/commit/88254ce59af29818aec900514693e3fe6c94acea)

### WebSockets / socket.io

At this moment there is no integration for socket.io or websockets, nor will there be in the near future. Once LoopBack has integrated support for it we will leverage from that.

Having that said, it's certainly possible to integrate socket.io, check [this](https://github.com/beeman/loopback-angular-admin/pull/44) pull request by [@movibe](https://github.com/movibe).

# Issues

If you have any problems please [contact me](https://github.com/beeman/loopback-angular-admin/issues/new).
