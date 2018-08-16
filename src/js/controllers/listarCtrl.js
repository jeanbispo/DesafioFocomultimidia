app.controller('listarCtrl', ['$scope', '$localStorage', '$state', function ($scope, $localStorage, $state) {

  $scope.lista = $localStorage.lista;
  $scope.edit = $scope.cadastro;

  $scope.mostrartooltip = function () { $scope.ocultartooltip = { "display": "block" }; };


  $scope.ver = function ($index) {
    $scope.vercad = $scope.lista[$index];
    $('#vercadModal').modal('show');
    $scope.ocultartooltip = { "display": "none" };

    $('#vercadModal').on('hide.bs.modal', function (event) {
      $scope.ocultartooltip = { "display": "block" };
    })

    $scope.editar = function () {
      $('#vercadModal').modal('hide');
      $state.go('dashboard.editar', { id: $index });

    };

  };


  // ************ Alterar ordem de listagem

  $scope.sortField = undefined;
  $scope.reverse = false;

  $scope.isSortUp = function (fieldName) {
    return $scope.sortField === fieldName && !$scope.reverse;
  };
  $scope.isSortDown = function (fieldName) {
    return $scope.sortField === fieldName && $scope.reverse;
  };
  $scope.sort = function (fieldName) {
    if ($scope.sortField === fieldName) {
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.sortField = fieldName;
      $scope.reverse = false;

    };
  }

}]);