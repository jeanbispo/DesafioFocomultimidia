app.controller('dashCtrl', ['$scope', '$state', 'listarAPI', '$localStorage', function ($scope, $state, listarAPI, $localStorage) {

  listarAPI.getCadastros()
    .then(function (lista, $index) {

      $localStorage.lista = lista;

    })
    .catch(function (erro) {

      $('#errorpesquisaModal').modal('show');
      console.log("error");
    });

  $scope.apagarlista = function () { delete $localStorage.lista; };



}]);

