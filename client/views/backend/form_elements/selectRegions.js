Template.listRegions.helpers({
  listRegions: function(){
    var listItems = Regions.find({}, {sort: {regionName: 1}});
    var listItem = [];
    if(listItems.count()>0){
      listItems.forEach(function(region){
        listItem += ['<option value="' + region._id + '">' + region.regionName + '</option'];
      })
    } else {
      listItem += ['<option value="empty">---</option>'];  
    }
    return listItem;
  }
});

Template.editRegions.helpers({
  editRegions: function(){
    /*
    var listItems = Authors.find({}, {sort: {lastName: 1}});
    var listItem = [];
    var getBookData = Books.findOne({_id: this._id}).affiliateData;
    var getBookAuthors = [];
    
    if(getBookData){
      listItems.forEach(function(author){
        var authorId = author._id;
        var authorName = author.firstName + ' ' + author.lastName;
        var testFor = false;
        
        for (var i in getBookData) {
          if (getBookData.hasOwnProperty(i)) {
            getBookAuthors = getBookData[i].authorName;          
            if(authorName == getBookAuthors){
              listItem += ['<option value="' + authorId + '" selected>' + authorName + '</option>'];
              testFor = true;
              break;
            }
          }
        }      
        if(!testFor) {
          listItem += ['<option value="' + authorId + '">' + authorName + '</option>'];  
        }
      });
    } else {
      listItems.forEach(function(author){
        var authorId = author._id;
        var authorName = author.firstName + ' ' + author.lastName;
        listItem += ['<option value="' + authorId + '">' + authorName + '</option>']; 
      });
    }
     
    return listItem;
    */
  }
});