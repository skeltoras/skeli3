//since v0.1.1

//-- template created functions
Template.customersListACP.created = function(){
};

//-- template destroyed functions
Template.customersListACP.destroyed = function(){
};

//-- template rendered functions
Template.customersListACP.rendered = function(){
};

//-- template helpers                            
Template.customersListACP.helpers({
  getCustomers: function() {
    return Customers.find({}).fetch();
  }
});

//-- template events
Template.customersListACP.events({ 
});