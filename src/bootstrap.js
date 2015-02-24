/*    
 * @license requirejs-angular-bootstrap 0.0.1
 * Copyright(c) 2014, Rodney Robert Ebanks foss@rodneyebanks.com All Rights Reserved.
 * Available via the MIT or new BSD license.
 */

(function() {
    'use strict';

    define(['require', 'config!paths', 'angular'], function(require, $config) {
        // Deferring Angular Bootstrap until we have loaded the necessary modules
        // http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
        window.name = 'NG_DEFER_BOOTSTRAP!';

        // Function return from AMD require call;
        return function bootstrap(filter, config) {
            var $module = window.angular.module,
                modules = config || $config || {},
                requireModules = ['domReady', 'angular'],
                angularModules = [];

            filter = new RegExp(filter || '.*');

            // Replacement angular.module to harvest angular.module.name(s)
            window.angular.module = function(name, requires, configFn) {
                angularModules.push(name);
                return $module(name, requires, configFn);
            };

            // List of AMD Requires build from filtered config (passed/requirejs.config)
            requireModules = [].concat(requireModules, Object.keys(modules).filter(function(element) {
                return filter.test(element);
            }));

            // Starting bootstrap by loading all required AMD/Shimmed scripts which should load Angular modules
            require(requireModules, function(domReady, angular) {
                // Starting Angular main module on domReady or deviceReady (if running on Cordova);
                // RequireJS domReady function this function is called once the DOM is ready.
                //It will be safe to query the DOM and manipulate DOM nodes in this function.
                domReady(function() {
                    // Loader to resume Angular Bootstrap when we are ready
                    function angularBootstrap() {
                        var $html = angular.element(document.getElementsByTagName('html')[0]);

                        $html.ready(function() {
                            angular.resumeBootstrap(angularModules);
                        });

                        window.angular.module = $module;
                    }

                    // Registering our resume Angular Bootstrap with Cordova if it is present and continuing if it is not.
                    if (window.cordova) {
                        document.addEventListener('deviceready', angularBootstrap, false);
                    } else {
                        angularBootstrap();
                    }
                });
            });
        };

    });
})();