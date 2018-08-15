app.controller('editarCtrl', ['$scope', '$stateParams', '$localStorage', '$state', 'getCep', function($scope, $stateParams, $localStorage, $state, getCep) {

$scope.urlId = $stateParams.id;
$scope.edit = $localStorage.lista[$scope.urlId]; 

$scope.getCep = function () {

        $scope.cepbusca = $scope.edit.cep;
        getCep.getDadoCep($scope.cepbusca)
         .then(function(dadocep){
              $scope.returncep = dadocep;
              $scope.edit.place = $scope.returncep.logradouro;
              if($scope.edit.bairro){$scope.edit.bairro = $scope.returncep.bairro;}
              if($scope.edit.Address){$scope.edit.Address = $scope.returncep.bairro;}
              if(!$scope.edit.Address && !$scope.edit.bairro){$scope.edit.bairro = $scope.returncep.bairro;}
              $scope.edit.city = $scope.returncep.localidade;
              $scope.edit.uf = $scope.returncep.uf;
              if($scope.returncep.erro == true){
                $scope.cpfValido = true;
              }
              if(!$scope.returncep.erro){
                $scope.cpfValido = false;
              }
              
          })
        .catch( function (erro) {
              $('#errorpesquisaModal').modal('show');
              console.log("error");
              
          });
        
        };

$scope.editarcadastro = function (){

        $localStorage.lista[$scope.urlId] = $scope.edit;
        console.log($localStorage.lista[$scope.urlId]);
        console.log('Editado');
        $('#confirmEditModal').modal('show');

};

$scope.apagarcadastro = function (){

        delete $localStorage.lista[$scope.urlId];
        console.log('Apagado');
        $('#deleteModal').modal('hide');
        $('#confirmdeletModal').modal('show');

};

$scope.confirmcadastro = function (){

        $('#confirmEditModal').modal('hide');
        $state.go('dashboard.pesquisar');

};

$scope.confirmdelete = function (){

        $('#confirmdeletModal').modal('hide');
        $state.go('dashboard.pesquisar');

};
  

}]);