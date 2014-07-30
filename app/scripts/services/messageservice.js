'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService() {
    return {
    	getMessages: function() {
    		var deferred = $q.defer();

    		$http({
    			method: 'GET',
    			url: 'http://localhost:9090'
    		}).success(function(data, status, headers, config) {
    			if(Array.isArray(data)) {
    				deferred.resolve(data[0]);
    			} else {
    				deferred.resolve(data);
    			}
    		}).error(function(data, status, headers, config) {
    			deferred.reject(data);
    		});

    		return deferred.promise;
    	
    	}
    }
  });
