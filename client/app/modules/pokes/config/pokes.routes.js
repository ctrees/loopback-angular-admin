'use strict';

var app = angular.module('com.module.pokes');

app.config(function($stateProvider) {
  $stateProvider.state('app.pokes', {
    abstract: true,
    url: '/pokes',
    templateUrl: 'modules/pokes/views/main.html',
    controller: 'PokesCtrl',
    controllerAs: 'ctrl'
  }).state('app.pokes.list', {
    url: '',
    templateUrl: 'modules/pokes/views/list.html',
    resolve: {
      pokes: ['PokesService', function(PokesService) {
        return PokesService.getPokes();
      }]
    },
    controller: function($scope, pokes) {
      $scope.pokes = pokes;
    }
  }).state('app.pokes.add', {
    url: '/add',
    templateUrl: 'modules/pokes/views/form.html',
    controller: 'PokesCtrl'
  }).state('app.pokes.edit', {
    url: '/:id/edit',
    templateUrl: 'modules/pokes/views/form.html',
    controller: 'PokesCtrl'
  }).state('app.pokes.view', {
    url: '/:id',
    templateUrl: 'modules/pokes/views/view.html',
    resolve: {
      poke: ['$stateParams', 'PokesService', function($stateParams,
        PokesService) {
        return PokesService.getPoke($stateParams.id);
      }]
    },
    controller: function($scope, poke) {
      $scope.poke = poke;
    }
  });
});
