//since v0.1.1

//-- template created functions
Template.customerNew.created = function(){
  Session.set('toursPackage', 'S');
  Session.set('toursHeader', '0');
  Session.set('toursGallery', '0');
  Session.set('toursTextOne', false);
  Session.set('toursTextTwo', false);
  Session.set('toursVideo', false);
};

//-- template destroyed functions
Template.customerNew.destroyed = function(){
};

//-- template rendered functions
Template.customerNew.rendered = function(){
  $(document).ready(function() { 
    $("#listCountries").select2();
    $("#listRegions").select2();
    $("#toursHasAddTextOne").bootstrapSwitch();
    $("#toursHasAddTextTwo").bootstrapSwitch();
    $("#toursHasVideo").bootstrapSwitch();
    $("#hasSocialMedia").bootstrapSwitch();         
  });
};

//-- template helpers                            
Template.customerNew.helpers({
});

//-- template events
Template.customerNew.events({ 
  'change #toursHasPackage': function(e){
    Session.set('toursPackage', e.currentTarget.value);
  },
  'change #toursHasHeader': function(e){
    Session.set('toursHeader', e.currentTarget.value);
  },
  'change #toursHasGallery': function(e){
    Session.set('toursGallery', e.currentTarget.value);
  },
  'click #toursHasAddTextOne, focus #toursHasAddTextOne': function(e){
    console.log(e);
    if(e.currentTarget.checked){
      Session.set('toursTextOne', true);
    } else {
      Session.set('toursTextOne', false);
    }
  },
  'click #toursHasAddTextTwo': function(e){
    if(e.currentTarget.checked){
      Session.set('toursTextTwo', true);
    } else {
      Session.set('toursTextTwo', false);
    }
  },
  'click #toursHasVideo': function(e){
    if(e.currentTarget.checked){
      Session.set('toursVideo', true);
    } else {
      Session.set('toursVideo', false);
    }
  },
  'submit form': function(e){
    e.preventDefault();
  }
});