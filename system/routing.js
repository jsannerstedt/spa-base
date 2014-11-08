/**
 * Created by joelsannerstedt on 2014-10-29.
 */
define(["grapnel"], function (Grapnel) {

    var router = new Grapnel(),
        routes = [
            "module2/:name",
            "module3/:id"
        ];

    return {
        start: start
    };

    function start(onRoute) {
        router.get("dyn/*", function (req) {
            onRoute("modules/dynamic/" + req.params["0"]);
        });

        routes.forEach(function(route) {
            router.get(route, function(req, event) {
                onRoute({
                    name: getModuleName(event),
                    params: req.params
                })
            })
        })
    }

    /**
     * filter out url fragments that are parameters, as those should not be part of the
     * component name
     * @param event
     * @returns {string} module name
     */
    function getModuleName(event) {
        var split = event.route.split("/"),
            split2 = event.value.split("/"),
            result = ["modules"],
            url;
        split.forEach(function (s) {
            if (split2.indexOf(s) !== -1) {
                result.push(s);
            }
        });
        url = result.join("/");
        return url;
    }
});