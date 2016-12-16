angular.module('app', []).directive('a1', function () {
    return {
        templateUrl: 'a1.html',
    };
}).directive('b2', function () {
    return {
        transclude: true,
    };
}).directive('c3', function () {
    return {
        transclude: true,
        terminal: true,
    };
}).directive('d4', function ($compile) {
    return {
        terminal: true,
        link: function (scope, element) {
            $compile(element.contents())(scope);
        },
    };
}).directive('child', function () {
    return {
        template: 'child',
        compile: function (element, attrs) {
            console.log(attrs.child);
        },
    };
});
