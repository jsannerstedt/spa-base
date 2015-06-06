/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define([
    "knockout",
    "bower_components/componentLoader/handleHashChange"
], function (ko, handleHashChange) {
    var main = ko.observable();

    handleHashChange(function (path, params) {
        if (!path) return;
        main({
            name: "modules/" + path,
            params: params
        });
    });

    return {
        main: main
    };
});