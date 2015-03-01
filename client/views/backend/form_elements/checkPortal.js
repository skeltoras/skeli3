//@since v0.1.3

//-- template rendered functions
Template.listAllPortals.rendered = function(){
  var portals = Portals.find().fetch();
  portals.forEach(function(portal){
    var val = '[name=' + portal.portalName + ']';
    $(val).bootstrapSwitch();
  });  
};

//-- template helpers
Template.listAllPortals.helpers({
  listAllPortals: function(){    
    var portalList = Portals.find().fetch();
    return portalList
  }
});

//-- template rendered functions
Template.listEditPortals.rendered = function(){
  var portals = Portals.find({}, {sort: {portalName: 1}}).fetch();
  portals.forEach(function(portal){
    var val = '[name=' + portal.portalName + ']';
    $(val).bootstrapSwitch();
  });  
};

//-- template helpers
Template.listEditPortals.helpers({
  listEditPortals: function(){
    var listItems = Portals.find({}, {sort: {portalName: 1}});
    var listItem = [];
    var getCustomerData = Customers.findOne({_id: this._id}).portals;
    getPortals = [];
    
    if(getCustomerData){
      listItems.forEach(function(portal){
        var portalName = portal.portalName;
        var testFor = false;
        
        listItem += ['<div class="form-group form-group-sm"><label for="' + portal._id + '" class="col-sm-6 control-label">' + portalName + '</label><div class="col-sm-6">'];
        
        for (var i in getCustomerData) {
          if (getCustomerData.hasOwnProperty(i)) {
            getPortals = getCustomerData[i].name;          
            if(portalName == getPortals){
              listItem += ['<input type="checkbox" id="' + portal._id + '" name="' + portalName + '" checked="checked"></div></div>'];
              testFor = true;
              break;
            }
          }
        }      
        if(!testFor) {
          listItem += ['<input type="checkbox" id="' + portal._id + '" name="' + portalName + '"></div></div>'];  
        }
      });
    } else {
      listItems.forEach(function(portal){
        var portalName = portal.portalName;
        listItem += ['<div class="form-group form-group-sm"><label for="' + portal._id + '" class="col-sm-6 control-label">' + portalName + '</label><div class="col-sm-6">'];
        listItem += ['<input type="checkbox" id="' + portal._id + '" name="' + portalName + '"></div></div>']; 
      });
    }
    return listItem;
  }
});