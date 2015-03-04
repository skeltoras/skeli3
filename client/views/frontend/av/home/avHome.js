//since v0.1.1

//-- template created functions
Template.avHome.created = function(){
};

//-- template destroyed functions
Template.avHome.destroyed = function(){
};

//-- template rendered functions
Template.avHome.rendered = function(){
};

//-- template helpers                            
Template.avHome.helpers({
  getFeaturedCustomer: function() {
    return Customers.find({}, {limit: 16});
  }
});

//-- template events
Template.avHome.events({ 
});