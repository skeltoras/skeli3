//@since v0.1.1
AcpController = RouteController.extend({
});

Router.route('/acp/customers', function (){ 
  this.render('customersListACP');
}, {
  name: 'customers.list.acp',
  controller: 'AcpController'
});

Router.route('/acp/customer/new', function () {
  this.render('customerNew', {
    data: function() {                                                                             
      //Session.set('sidebar', false);                                                               
    }
  });
}, {
  name: 'customer.new',
  controller: 'AcpController'
});

Router.route('/acp/customer/show/:_id', function (){ 
  this.render('customerACP', {
    data: function () {
      //Session.set('sidebar', true);
      Session.set('customerId', this.params._id);
      return Customers.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
  //this.render('authorSidebar', {to: 'sidebar'});
}, {
  name: 'customer.show.acp',
  controller: 'AcpController'
});

Router.route('/acp/customer/edit/:_id', function (){ 
  this.render('customerEdit', {
    data: function () {
      Session.set('customerId', this.params._id);
      return Customers.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'customer.edit',
  controller: 'AcpController'
});