/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define([
    "knockout",
    "system/routing"
], function (ko, routing) {
    var main = ko.observable();

    routing.start(onRoute);

    return {
        main: main
    };

    function onRoute(config){
        main(config);
    }
});