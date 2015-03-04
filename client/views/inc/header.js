//since v0.1.1

//-- template created functions
Template.header.created = function(){
};

//-- template destroyed functions
Template.header.destroyed = function(){
};

//-- template rendered functions
Template.header.rendered = function(){
  $(document).ready(function(){
    $(".topnav").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.header.helpers({
});

//-- template events
Template.header.events({ 
});