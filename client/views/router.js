//@since v0.1.1
Router.configure({
  layoutTemplate: 'global',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

//-- frontend
Router.route('/', function () {
  this.render('home');
});

//-- frontend user
Router.route('/ucp', function () {
  this.render('dashboardUser', {
    onBeforeAction: function(){
      requireLogin();
      this.next();
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
});

//-- backend
Router.route('/acp', function () {
  this.render('dashboardAdmin', {
    onBeforeAction: function(){
      requireLogin();
      this.next();
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.redirect('/login');
      this.next();
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('loading');