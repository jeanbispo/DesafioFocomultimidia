app.factory('listarAPI', ['$http', 'BASE_URL', function ($http, BASE_URL) { 
	var lista = [];
	var _getCadastros = function () {
		var req1 = {
			method: 'GET',
			url: BASE_URL,
			  }
		return $http(req1).then(function(response){
            lista = response.data;
            return lista;
        });
	};

	
	return {
		getCadastros: _getCadastros
	};

}]);