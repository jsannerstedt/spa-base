/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define(["knockout"], function (ko) {
    "use strict";

    return {
        init: init
    };

    function init() {
        ko.components.loaders.unshift({
            getConfig: getConfig,
            loadViewModel: loadViewModel
        });

        ko.components.getComponentNameForNode = function (node) {
            var tagNameLower = node.tagName && node.tagName.toLowerCase(),
                moduleName;

            if (tagNameLower.indexOf("tretton37-") === 0) {
                moduleName = tagNameLower.substr(10).replace(/-/g, "/");
                return "components/" + moduleName;
            } else {
                return null;
            }
        };
    }

    function getConfig(name, callback) {
        callback({
            template: {require: "text!" + name + ".html"},
            viewModel: {require: name}
        });
    }

    function loadViewModel(name, viewModelConfig, callback) {
        callback(function (params/*, componentInfo*/) {
            if (isFunction(viewModelConfig)) {
                return construct(viewModelConfig, params ? [params] : []);
            } else {
                if (viewModelConfig.initialize && isFunction(viewModelConfig.initialize)) {
                    viewModelConfig.initialize(params);
                }
                return viewModelConfig;
            }
        });
    }

    function construct(Constructor, args) {
        var Wrapper = function () {
                return Constructor.apply(this, args);
            },
            instance;

        Wrapper.prototype = Constructor.prototype;
        instance = new Wrapper();
        instance.constructor = Constructor;

        return instance;
    }

    function isFunction(obj) {
        return typeof obj === 'function';
    }
});