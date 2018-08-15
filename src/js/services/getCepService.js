app.factory('getCep', ['$http', function ($http) { 
	var dadocep = [];
	var _getCep = function (cepbusca) {
		var reqcep = {
			method: 'GET',
			url: 'https://viacep.com.br/ws/' + cepbusca + '/json/',
			  }
		return $http(reqcep).then(function(response){
            dadocep = response.data;
            return dadocep;
        });
	};

	
	return {
		getDadoCep: _getCep
	};

}]);