define(['angular', 'modules/module'], function(angular, module) {
    'use strict';
    return module.controller('SampleCtrl', ['$scope', function($scope) {

        $scope.context = {
            url: 'http://api.wunderground.com/api/e77862ea276e303e/conditions/q/CA/San_Ramon.json?callback=JSON_CALLBACK'
        };

    }]);
});
