//since v0.1.1

//-- template created functions
Template.customerEditACP.created = function(){
};

//-- template destroyed functions
Template.customerEditACP.destroyed = function(){
};

//-- template rendered functions
Template.customerEditACP.rendered = function(){
  var portals = Portals.find().fetch();
  portals.forEach(function(portal){
    var val = '[name=' + portal.portalName + ']';
    $(val).bootstrapSwitch();
  });  
};

//-- template helpers                            
Template.customerEditACP.helpers({
  getPortals: function() {
    return Portals.find().fetch();
  }
});

//-- template events
Template.customerEditACP.events({ 
});