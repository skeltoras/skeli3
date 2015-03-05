//since v0.1.1

//-- template created functions
Template.acpUploads.created = function(){
};

//-- template destroyed functions
Template.acpUploads.destroyed = function(){
};

//-- template rendered functions
Template.acpUploads.rendered = function(){
};

//-- template helpers                            
Template.acpUploads.helpers({
  getAvCustomerCount: function() {
    return AvCustomers.find().count();
  }
});

//-- template events
Template.acpUploads.events({
  'submit #uploadAvCustomers': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[type=file]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uploadAVData', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  } 
});