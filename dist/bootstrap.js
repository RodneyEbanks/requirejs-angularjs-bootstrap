/*    
 * @license requirejs-angular-bootstrap 0.0.1
 * Copyright(c) 2014, Rodney Robert Ebanks foss@rodneyebanks.com All Rights Reserved.
 * Available via the MIT or new BSD license.
 */

(function(){"use strict";define("bootstrap",["require","config!paths","angular"],function(require,$config){return window.name="NG_DEFER_BOOTSTRAP!",function bootstrap(filter,config){var $module=window.angular.module,modules=config||$config||{},requireModules=["domReady","angular"],angularModules=[];filter=new RegExp(filter||".*"),window.angular.module=function(name,requires,configFn){return angularModules.push(name),$module(name,requires,configFn)},requireModules=[].concat(requireModules,Object.keys(modules).filter(function(element){return filter.test(element)})),require(requireModules,function(domReady,angular){domReady(function(){function angularBootstrap(){var $html=angular.element(document.getElementsByTagName("html")[0]);$html.ready(function(){angular.resumeBootstrap(angularModules)}),window.angular.module=$module}window.cordova?document.addEventListener("deviceready",angularBootstrap,!1):angularBootstrap()})})}})})();