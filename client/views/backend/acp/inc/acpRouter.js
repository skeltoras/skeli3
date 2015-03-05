//@since v0.1.1
AcpController = RouteController.extend({
  layoutTemplate: 'acpLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/acp', function (){ 
  this.render('acpHome');
}, {
  name: 'acp.home',
  controller: 'AcpController'
});

Router.route('/acp/upload', function (){ 
  this.render('acpUploads');
}, {
  name: 'acp.uploads',
  controller: 'AcpController'
});

Router.route('/acp/customers', function (){ 
  this.render('acpCustomerlist');
}, {
  name: 'acp.customers',
  controller: 'AcpController'
});

Router.route('/acp/customernew', function (){ 
  this.render('acpCustomerNew');
}, {
  name: 'acp.customer.new',
  controller: 'AcpController'
});