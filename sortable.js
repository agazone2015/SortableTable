angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTeam   = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.clubs = [
    { name: 'MELB MELB', team: 'Melbourne', wins: 2 },
    { name: 'WCE WCE', team: 'West Coast Eagles', wins: 4 },
    { name: 'HAW HAW', team: 'Hawthorn',  wins: 7 },
    { name: 'SYD SYD', team: 'Sydney Swans',  wins: 6 },
    { name: 'RICH RICH', team: 'Richmond', wins: 2 },
    { name: 'WB WB', team: 'Western Bulldogs', wins: 4 },
    { name: 'ADEL ADEL', team: 'Adelaide Crows',  wins: 7 },
    { name: 'STK STK', team: ' St Kilda',  wins: 6 }
  ];

});