app = angular.module('wikiSearchApp', ['ngSanitize']);

app.controller('wikiController', ['$scope', '$http', function($scope, $http) {
    var apiBaseUrl = 'https://en.wikipedia.org/w/api.php';

    angular.element(document).ready(function () {
        $http.jsonp(apiBaseUrl,
            {
                params: {
                    action: 'query',
                    list: 'random',
                    rnlimit: '1',
                    rnnamespace: '0',
                    format: 'json',
                    callback: 'JSON_CALLBACK'
                }
            })
            .then(function (response) {
                $scope.randomLink = "http://en.wikipedia.org/?curid=" + response.data.query.random[0].id;
            }
        );
    });

    $scope.onTypeEvent = function () {
        $http.jsonp(apiBaseUrl,
            {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    srsearch: $scope.searchValue,
                    callback: 'JSON_CALLBACK'
                }
            })
            .then(function (response) {
                $scope.searchResults = response.data.query.search;
            });
    };
}]);