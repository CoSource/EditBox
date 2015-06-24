/**
 * Created by Richard on 24/06/2015.
 */
angular.module('app', []);
angular.module('app').directive('editBox', function(){
    return {
        scope: true,
        restrict: "A",
        transclude: true,
        templateUrl: "src/editBox.html",
        controller: function($scope) {
            $scope.editable = false;
        }
    };
});