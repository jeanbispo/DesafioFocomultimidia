angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider) {
                var layout = "/src/views/template.html";

                $urlRouterProvider
                    .otherwise('/dashboard/home');

                $stateProvider
                    .state('dashboard', {
                        abstract: true,
                        url: ('/dashboard'),
                        templateUrl: layout,
                        controller: 'dashCtrl'
                    })

                    .state("dashboard.home", {
                        url: "/home",
                        templateUrl: "/src/views/dashboard/home.template.html",
                        controller: 'homeCtrl'
                    })

                    .state("dashboard.cadastrar", {
                        url: "/cadastrar",
                        templateUrl: "/src/views/dashboard/cadastrar.html",
                        controller: 'cadastrarCtrl'
                    })

                    .state("dashboard.pesquisar", {
                        url: "/pesquisar",
                        templateUrl: "/src/views/dashboard/pesquisar.html",
                        controller: 'listarCtrl'
                    })
                    
                    .state("dashboard.editar", {
                        url: "/editar/:id",
                        templateUrl: "/src/views/dashboard/editar.html",
                        controller: 'editarCtrl'
                    })

            }]);