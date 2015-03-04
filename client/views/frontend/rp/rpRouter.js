//@since v0.1.1
RPController = RouteController.extend({
});

Router.route('/rp', function (){ 
  this.render('rpHome', {
    //waitOn: function() {
    //  return Meteor.subscribe('rphomerentings');
    //  return Meteor.subscribe('rphometours');
    //},
    data: function () {
      //return Meteor.subscribe('rphomerentings');
    },
    action: function() {
      if (this.ready()) {
        this.render();
      } else {
        this.render('loading');
      }
    }
  });
}, {
  name: 'rp.home'
  //controller: 'RPController'
});


Router.route('/rp/1/:rentingsSiteUrl', function (){ 
  this.render('rentingsSingle', {
    waitOn: function() {
      return Meteor.subscribe('rentings');
    },
    data: function () {
      Meteor.subscribe('rentings');
      return Rentings.findOne({rentingsSiteUrl: this.params.rentingsSiteUrl});
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

Router.route('/rp/2/:toursSiteUrl', function (){ 
  this.render('toursSingle', {
    waitOn: function() {
      return Meteor.subscribe('tours');
    },
    data: function () {
      Meteor.subscribe('tours');
      return Tours.findOne({toursSiteUrl: this.params.toursSiteUrl});
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

Router.onBeforeAction('loading');