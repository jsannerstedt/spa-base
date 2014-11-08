/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define([], function () {

    require.config({
        baseUrl: "./",
        paths: {
            knockout: "bower_components/knockout/dist/knockout.debug",
            text: "bower_components/requirejs-text/text",
            grapnel: "bower_components/grapnel/dist/grapnel.min"

        }
    });

    require([
        "knockout",
        "shell",
        "system/componentLoader",
        "text"
    ], function (ko, shell, componentLoader/*text*/) {

       componentLoader.init();

        // start
        ko.applyBindings(shell);
    });
});