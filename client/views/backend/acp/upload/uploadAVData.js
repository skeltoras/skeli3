//since v0.1.1

//-- template created functions
Template.uploadAVData.created = function(){
};

//-- template destroyed functions
Template.uploadAVData.destroyed = function(){
};

//-- template rendered functions
Template.uploadAVData.rendered = function(){
};

//-- template helpers                            
Template.uploadAVData.helpers({
  getCount: function() {
    return AvCustomers.find().count();
  }
});

//-- template events
Template.uploadAVData.events({
  'submit form': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[type=file]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      //for (var i = 0; i < 100; ++i) {
      //  console.log(data);
      //  AvCustomers.insert(data);
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uploadAVData', data[i], function(error, result){
          if(error)
            console.log(error);
            //return throwError(error.reason);
        });
      }
    }
    //Router.go('/');
  } 
});