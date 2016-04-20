(function() {
  'use strick';

  angular
    .module('metronome')
    .factory('homeConf', homeConf);

  function homeConf($http) {

    return $http.get(
        // 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json'
        // 'views/paramHome.json'
        'http://metronome/app/views/forecast.json'
      )
      .success(function(data) {
        console.log("json success");
        return data;
      })
      .error(function(err) {
        console.log("json err");
        return err;
      });

  }

})();
