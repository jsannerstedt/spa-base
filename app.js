/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define([], function () {

    require.config({
        baseUrl: "./",
        paths: {
            knockout: "bower_components/knockout/dist/knockout.debug",
            text: "bower_components/requirejs-text/text"
        }
    });

    require([
        "knockout",
        "shell",
        "bower_components/componentLoader/componentLoader",
        "bower_components/componentLoader/customComponents",
        "text"
    ], function (ko, shell, componentLoader, customComponents/*text*/) {

       componentLoader(ko);
       customComponents(ko, {componentPrefix: "tretton37", componentDir: "components"});

        // start
        ko.applyBindings(shell);
    });
});