'use strict';

//clients service used to communicate clients REST endpoints
angular.module('clients').factory('Clients', ['$resource',
	function($resource) {
		return $resource('clients/:clientId', { clientId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);