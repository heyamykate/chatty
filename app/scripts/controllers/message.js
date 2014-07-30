'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    MessageService.getMessages().then(function(data) {
    	$scope.messages = data;
    });
  });
