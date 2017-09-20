define(['angular', 'modules/module'], function(angular, module) {
    'use strict';

    module.filter('slugify', function() {
        return function(input, lowercase) {
            var out = input.replace(/\s/g, '-');
            if (lowercase) {
                out = out.toLowerCase();
            }
            return out;
        };
    });

    return module;
});
