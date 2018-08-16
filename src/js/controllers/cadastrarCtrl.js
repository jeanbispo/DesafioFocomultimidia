app.controller('cadastrarCtrl', ['$scope', '$localStorage', '$state', 'getCep', function ($scope, $localStorage, $state, getCep) {

  $scope.getCep = function () {

    $scope.cepbusca = $scope.cad.cep;
    getCep.getDadoCep($scope.cepbusca)
      .then(function (dadocep) {
        $scope.returncep = dadocep;
        console.log('Recebido');
        console.log($scope.returncep);

        $scope.cad.place = $scope.returncep.logradouro;
        $scope.cad.Address = $scope.returncep.bairro;
        $scope.cad.city = $scope.returncep.localidade;
        $scope.cad.uf = $scope.returncep.uf;
        if ($scope.returncep.erro == true) {
          $scope.cpfValido = true;
        }
        if (!$scope.returncep.erro) {
          $scope.cpfValido = false;
        }

      })
      .catch(function (erro) {
        $('#errorpesquisaModal').modal('show');
        console.log("error");

      });

  };

  $scope.addcad = function () {

    $localStorage.lista.push($scope.cad);
    console.log($localStorage.lista[$localStorage.lista.length - 1]);
    console.log('enviado 1');
    $('#confirmSaveModal').modal('show');

    $scope.buttonDisabled = true;


  };


  $scope.continuarcadastro = function () { $('#confirmSaveModal').modal('hide'); $scope.cad = {}; $scope.buttonDisabled = false; };
  $scope.gohome = function () { $('#confirmSaveModal').modal('hide'); $state.go('dashboard.home'); $scope.buttonDisabled = false; };


}]);