# What if you could make bootstrapping AngularJS more modular?

This AMD module using [RequireJS](http://requirejs.org) allows you modularize your application.

## Install

You can use [bower](http://bower.io/) to install it easily:

```
bower install --save requirejs-angularjs-bootstrap
```

## Documentation
This module automates the AngularJS deferred [Bootstrap](https://docs.angularjs.org/guide/bootstrap) process and works with requirejs.config() settings.

## Basic usage

Add ng-app attribute to the html tag in your index.html file:

index.html
```index.html
// Add ng-app with no module defined i.e. ="application"

<html ng-app>

<head>
</head>

<body>

    <!-- scripts start -->
    <script type="text/javascript" data-main="js/main" src="bower_components/requirejs/require.js"></script>
</body>

</html>

```
Put the module inside the `baseUrl` folder (usually same folder as the main.js
file) or create an alias to the module location:

main.js
```main.js
requirejs.config({
    baseUrl:'/js',
    paths : {
        //create alias to modules (not needed if modules are on the baseUrl)
        bootstrap: '../bower_components/requirejs-angularjs-bootstrap/bootstrap',
        application: 'application',
        applicationOther: '../bower_components/someOtherApp/application'
    }
});

// use plugin 
define(['bootstrap'], function(bootstrap) {

    // Option 1 Config will be extracted from requirejs.config and filter based on RegExp provided.
        bootstrap('^application.*');
    
    // Option 2 Config provided and filter based on RegExp provided (we only care about the keys not values). 
        bootstrap('.*',{application:true,applicationOther:'Yes Please'});
    });
    
```

## License

requirejs-angularjs-bootstrap is released under two licenses: new BSD, and MIT. You may pick the
license that best suits your development needs.

Copyright (c) 2015 Rodney Robert Ebanks foss@rodneyebanks.com
