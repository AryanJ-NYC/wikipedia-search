app = angular.module('wikiSearchApp', []);

app.controller('wikiController', ['$scope', '$http', function($scope, $http) {
    var apiBaseUrl = 'https://en.wikipedia.org/w/api.php';

    $scope.onTypeEvent = function() {
        $http.jsonp(apiBaseUrl, {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    srsearch: $scope.searchValue,
                    callback: 'JSON_CALLBACK'
                }
            })
            .then(function (response) {
                $scope.searchResults = response.data;
            });
    }
}]);