//@since v0.1.1
RPController = RouteController.extend({
});

Router.route('/rp/1/:rentingsUrl', function (){ 
  this.render('rentingsSingle', {
    data: function () {
      return Rentings.findOne({rentingsUrl: this.params.rentingsUrl});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'rentings.single',
  controller: 'RPController'
});

Router.route('/rp/2/:toursUrl', function (){ 
  this.render('toursSingle', {
    data: function () {
      return Tours.findOne({toursUrl: this.params.toursUrl});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'tours.single',
  controller: 'RPController'
});