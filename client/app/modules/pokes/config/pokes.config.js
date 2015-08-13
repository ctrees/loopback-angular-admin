'use strict';
angular.module('com.module.pokes')
  .run(function($rootScope, Poke, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Pokes'), 'app.pokes.list',
      'fa-edit');

    Poke.find(function(pokes) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Pokes'),
        'bg-red', 'ion-document-text', pokes.length, 'app.pokes.list');
    });

  });
