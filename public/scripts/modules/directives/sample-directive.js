define(['angular', 'modules/module'], function(angular, module) {
    'use strict';

    module.directive('appVersion', ['version', function(version) {
        return {
            restrict: 'E',
            link: function(scope, elm) {
                elm.text('Version ' + version);
            }
        };
    }]);

    return module;
});
