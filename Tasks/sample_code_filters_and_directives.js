//custom filter to filter values based on first letter
https://jsfiddle.net/toddmotto/GDmN7/
//custom filter to capitalize values based on selected letter
https://scotch.io/tutorials/building-custom-angularjs-filters

// Simple directive:

.directive('jobsMyJobDashboard', function() {
        return {
            templateUrl: 'scripts/plugins/Job/Job/views/default/my_jobs_dashboard.html',
            restrict: 'E',
            controller: 'MyJobsDashboardController'
        };
    })

    /* Star-Rattings directive */
    .directive('starRating', function() {
        return {
            restrict: 'A',
            template: '<ul class="rating">' + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' + '\u2605' + '</li>' + '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                onRatingSelected: '&'
            },
            link: function(scope, elem, attrs) { // jshint ignore:line
                var updateStars = function() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                scope.toggle = function(index) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating: index + 1
                    });
                };
                scope.$watch('ratingValue', function(oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        };
    })
