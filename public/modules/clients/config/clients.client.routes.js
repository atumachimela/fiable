'use strict';

//Setting up route
angular.module('clients').config(['$stateProvider',
	function($stateProvider) {
		// Clients state routing
		$stateProvider.
		state('client', {
			url: '/clients',
			templateUrl: 'modules/clients/views/list-clients.client.view.html'
		}).
		state('createclient', {
			url: '/clients/create',
			templateUrl: 'modules/clients/views/create-clients.client.view.html'
		}).
		state('viewclient', {
			url: '/clients/:clientId',
			templateUrl: 'modules/clients/views/view-clients.client.view.html'
		}).
		state('editclient', {
			url: '/clients/:clientId/edit',
			templateUrl: 'modules/clients/views/edit-clients.client.view.html'
		}).
		state('createproforma', {
			url: '/clients/:clientId/proforma/create',
			templateUrl: 'modules/clients/views/create-proforma.client.view.html'
		}).
		state('proforma', {
			url: '/clients/:clientId/proforma',
			templateUrl: 'modules/clients/views/list-proforma.client.view.html'
		}).
		state('viewproforma', {
			url: '/clients/:clientId/proforma/:proformaId',
			templateUrl: 'modules/clients/views/view-proforma.client.view.html'
		}).
		state('createinvoice', {
			url: '/clients/:clientId/proforma/:proformaId/invoice/create',
			templateUrl: 'modules/clients/views/create-invoice.client.view.html'
		}).
		state('invoices', {
			url: '/clients/:clientId/proforma/:proformaId/invoices',
			templateUrl: 'modules/clients/views/list-invoice.client.view.html'
		}).
		state('viewinvoice', {
			url: '/clients/:clientId/proforma/:proformaId/invoice/:invoiceId',
			templateUrl: 'modules/clients/views/view-invoice.client.view.html'
		}).
		state('createdelivery', {
			url: '/clients/:clientId/proforma/:proformaId/delivery/create',
			templateUrl: 'modules/clients/views/create-delivery.client.view.html'
		}).
		state('deliveries', {
			url: '/clients/:clientId/proforma/:proformaId/deliveries',
			templateUrl: 'modules/clients/views/list-delivery.client.view.html'
		}).
		state('viewdelivery', {
			url: '/clients/:clientId/proforma/:proformaId/delivery/:deliveryId',
			templateUrl: 'modules/clients/views/view-delivery.client.view.html'
		});
	}
]);
