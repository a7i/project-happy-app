define(['angular',
    'modules/module',
    'css!modules/controllers/dashboard.css'
], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('DashboardsCtrl', ['$scope', '$rootScope', 'HappinessService', function ($scope, $rootScope, happinessService) {
        var optionClicked = function optionClicked(optionId) {
            $scope.showAlert = true;
            var questionId = 1;
            happinessService.submit(optionId, questionId).then(function(){
                $scope.showAlert = false;
            }, function(){
                $scope.showAlert = false;
            });
        };

        $scope.optionClicked = optionClicked;
        happinessService.getSurveyQuestion().then(function(question) {
            $scope.surveyQuestion = question;
        });
    }]);
});
