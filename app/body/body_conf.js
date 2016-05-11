(function() {
  'use strick';

  angular
    .module('metronome')
    .factory('bodyConf', bodyConf);

  function bodyConf($http) {

    return $http.get(
        'https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json'
        // 'body/paramBody.json'
        // 'http://metronome/app/body/forecast.json'
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
