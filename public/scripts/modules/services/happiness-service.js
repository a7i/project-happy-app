define(['angular', 'modules/module'], function(angular, module) {
    'use strict';

    module.service('HappinessService', ['$q', '$timeout', function($q, $timeout) {
        return {
            submit: function(optionId, questionId) {
                var deferred = $q.defer();

                $timeout(function() {
                    deferred.resolve();
                }, 2000);

                return deferred.promise;
            },
            getSurveyQuestion: function() {
                var deferred = $q.defer();
                $timeout(function() {
                    deferred.resolve('Do you feel your job is secure?');
                }, 1000);
                return deferred.promise;
            }
        };
    }]);

    return module;
});
