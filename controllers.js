var AMail = angular.module('AMail11',['ngRoute','ngSanitize']);

function email($routeProvider){
	$routeProvider.when('/',{
		controller:ListController,
		templateUrl:'list.html'
	}).when('/view/:id',{
		controller:DetailController,
		templateUrl:'detail.html'
	}).otherwise({
		redirectTo:'/'
	});
}
AMail.config(email);
messages=[{
	id:0,
	sender:'aaaa',
	subject:'Hi',
	date:'1222222'
},{
	id:1,
	sender:'bbb',
	subject:'Hijlo',
	date:'756747353'
},{
	id:2,
	sender:'aa11',
	subject:'sfsdfs',
	date:'1324345435'
}];

function ListController($scope){
	$scope.messages = messages;
	$scope.order = "date";
}

function DetailController($scope,$routeParams){
	$scope.message = messages[$routeParams.id];
}