//@since v0.1.1
RPController = RouteController.extend({
});

Router.route('/rp/1/:_id', function (){ 
  this.render('rentingsSingle', {
    data: function () {
      return Rentings.findOne({_id: this.params._id});
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