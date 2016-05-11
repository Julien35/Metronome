(function() {
  'use strick';

  angular
    .module('metronome')
    .factory('mainHomeConf', mainHomeConf);

  function mainHomeConf($http) {

    return $http.get(
        'https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json'
        // '/conf/mainHome.param.json'
        // 'http://metronome/app/conf/forecast.json'
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
