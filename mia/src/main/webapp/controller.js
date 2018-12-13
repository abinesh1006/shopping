/**
 * 
 */
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "login.jsp",
        	controller: 'loginController'
       
    })
    .when("/red", {
        templateUrl : "header.jsp"
    })
    .when("/green", {
        templateUrl : "index.jsp"
    });
});
 app.controller('loginController', function($scope) {
    $scope.username = "";
    $scope.password = "";
});
 app.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf('.') >3) {
                    mCtrl.$setValidity('char.', true);
                } else {
                    mCtrl.$setValidity('char.', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
