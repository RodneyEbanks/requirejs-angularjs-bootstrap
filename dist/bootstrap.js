/*    
 * @license requirejs-angular-bootstrap 0.0.1
 * Copyright(c) 2014, Rodney Robert Ebanks foss@rodneyebanks.com All Rights Reserved.
 * Available via the MIT or new BSD license.
 */

"use strict";window.name="NG_DEFER_BOOTSTRAP!",define("bootstrap",["config!paths","angular"],function($config){return function bootstrap(filter,config){var $module=window.angular.module,modules=config||$config||{},requireModules=["domReady"],angularModules=[];filter=new RegExp(filter||".*"),window.angular.module=function(name,requires,configFn){return angularModules.push(name),$module(name,requires,configFn)},requireModules=[].concat(requireModules,Object.keys(modules).filter(function(element){return filter.test(element)})),requirejs(requireModules,function(domReady){domReady(function(){function angularBootstrap(){window.angular.resumeBootstrap(angularModules),window.angular.module=$module}window.cordova?document.addEventListener("deviceready",angularBootstrap,!1):angularBootstrap()})})}});