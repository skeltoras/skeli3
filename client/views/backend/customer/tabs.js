//since v0.1.4

//-- template created functions
Template.tabs.created = function(){
};

//-- template destroyed functions
Template.tabs.destroyed = function(){
};

//-- template rendered functions
Template.tabs.rendered = function(){
  $('.hasPackageS').hide();
  $('.hasPackageM').hide();
  $('.hasPackageL').hide();
  $('.hasPackageXL').hide();
};

//-- template helpers                            
Template.tabs.helpers({  
  // HINWEIS: voerst nur für Vermietungen!
  getDataRentings: function() {
    var customerId = Session.get('customerId');
    if(this.name=='Vermietungen') {
      var renting = Rentings.findOne({customerId: customerId});
      Session.set('rentingsId', renting._id);
      Session.set('hasPackageS', renting.hasPackageS);
      Session.set('hasPackageM', renting.hasPackageM);
      Session.set('hasPackageL', renting.hasPackageL);
      Session.set('hasPackageXL', renting.hasPackageXL);
      return renting;    
    }
  },
  checkS: function() {
    var test = Session.get('hasPackageS');
    return test;
  },
  checkM: function() {
    return Session.get('hasPackageM');
  },
  checkL: function() {
    return Session.get('hasPackageL');
  },
  checkXL: function() {
    return Session.get('hasPackageXL');
  }
});

//-- template events
Template.tabs.events({ 
  'click .changeRentings': function(e){
    var getClass ='.' + e.currentTarget.id;
    if(e.currentTarget.checked){
      Session.set(e.currentTarget.id, true);
      $(getClass).show();
      $(getClass).editable({inlineMode: false});
    } else {
      Session.set(e.currentTarget.id, false);
      $(getClass).editable('destroy');
      $(getClass).hide();
    }
  }
});