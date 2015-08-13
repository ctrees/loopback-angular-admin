'use strict';
var app = angular.module('com.module.pokes');

app.service('PokesService', ['CoreService', 'gettextCatalog', 'Poke', function(
  CoreService, gettextCatalog, Poke) {

  this.getPokes = function() {
    return Poke.find({
      filter: {
        order: 'created DESC'
      }
    }).$promise;
  };

  this.getPoke = function(id) {
    return Poke.findById({
      id: id
    }).$promise;
  };

  this.deletePoke = function(id, cb) {
    CoreService.confirm(gettextCatalog.getString('Are you sure?'),
      gettextCatalog.getString('Deleting this cannot be undone'),
      function() {
        Poke.deleteById(id, function() {
          CoreService.toastSuccess(gettextCatalog.getString(
            'Item deleted'), gettextCatalog.getString(
            'Your item has been deleted!'));
          cb();
        }, function(err) {
          CoreService.toastError(gettextCatalog.getString('Oops'),
            gettextCatalog.getString('Error deleting item: ') +
            err);
          cb();
        });
      },
      function() {
        return false;
      });
  };

}]);
