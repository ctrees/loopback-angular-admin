'use strict';
angular.module('com.module.pokes')
  .controller('PokesCtrl', function($scope, $state, $stateParams, CoreService,
    FormHelper, gettextCatalog, Poke, PokesService) {

    $scope.delete = function(id) {
      PokesService.deletePoke(id, function() {
        $state.reload();
      });
    };

    this.formHelper = new FormHelper(Poke);
    $scope.cancel = function() {
      console.log('Cancel');
      console.log(this.formHelper);
      //this.formHelper.cancel('app.pokes.list');
    };

    var pokeId = $stateParams.id;

    if (pokeId) {
      $scope.poke = Poke.findById({
        id: pokeId
      }, function() {}, function(err) {
        console.log(err);
      });
    } else {
      $scope.poke = {};
    }

    $scope.formFields = [{
      key: 'title',
      type: 'text',
      label: gettextCatalog.getString('Title'),
      required: true
    }, {
      key: 'content',
      type: 'textarea',
      label: gettextCatalog.getString('Content'),
      required: true
    }, {
      key: 'image',
      type: 'text',
      label: gettextCatalog.getString('image'),
      required: true
    }];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: gettextCatalog.getString('Save')
    };

    $scope.onSubmit = function() {
      Poke.upsert($scope.poke, function() {
        CoreService.toastSuccess(gettextCatalog.getString('Poke saved'),
          gettextCatalog.getString('Your poke is safe with us!'));
        $state.go('^.list');
      }, function(err) {
        console.log(err);
      });
    };

  });
