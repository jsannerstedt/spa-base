/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define(["knockout"], function (ko) {
    var id = ko.observable();

    return {
        id: id,
        initialize: initialize
    };

    function initialize(params) {
        id(params.id);
    }
});