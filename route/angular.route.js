define(['../app'], function(app) {
    // console.log(app);

    app.config(function(
        $stateProvider,
        $urlRouterProvider,
        $locationProvider,
        $httpProvider) {
        // console.log($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider);

        $urlRouterProvider.otherwise("/index");


        const PATH_LAYOUT = './views/common/layout.html';

        const PATH_MENU = './views/common/menu.html';



        $stateProvider


            .state('index', {
                url: '/index',
                views: {
                    'layout': {
                        templateUrl: PATH_LAYOUT
                    },
                    'side@index': {
                        templateUrl: PATH_MENU
                    },
                    'main@index': {
                        templateUrl: './views/homepage/index.html',
                        controller: 'homepageCtrl'
                    }
                }
            })

            .state('main', {
                url: '/main',
                views: {
                    'layout': {
                        templateUrl: PATH_LAYOUT
                    },
                    'side@main': {
                        templateUrl: PATH_MENU
                    },
                    'main@main': {
                        templateUrl: './views/homepage/index.html'
                    }
                }
            })

            // .state('base', {
            //     // A
            //     url: '/base',
            //     views: {
            //         'layout': {
            //             templateUrl: PATH_LAYOUT
            //         },
            //         'side@base': {
            //             templateUrl: PATH_MENU
            //         },
            //         'main@base': {
            //             templateUrl: './views/homepage/index.html'
            //         }
            //     }
            // })




    })
})