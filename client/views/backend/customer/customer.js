//since v0.1.1

//-- template created functions
Template.customerACP.created = function(){
};

//-- template destroyed functions
Template.customerACP.destroyed = function(){
};

//-- template rendered functions
Template.customerACP.rendered = function(){
  $('#text.editable').editable({
    success: function(response, newValue) {
    }
  });
};

//-- template helpers                            
Template.customerACP.helpers({
});

//-- template events
Template.customerACP.events({ 
});