Template.listBookList.helpers({
});

Template.listBookListSel2.helpers({  
  listBookListSel2: function(){
    listItems = Books.find({}, {sort: {bookTitle: 1}});
    listItem = [];
    listItem += ['<option value="empty" class="empty-grey">Buch wählen</option>'];
    listItems.forEach(function(book){
      listItem += ['<option value="' + book.bookTitle + '">' + book.bookTitle + '</option>']; 
    }); 
    return listItem;
  }
});

Template.editBookList.helpers({
});

Template.editBookListSel2.helpers({  
  editBookListSel2: function(){
    listItems = Books.find({}, {sort: {bookTitle: 1}});
    checkCurrent = Contracts.findOne({_id: this._id}).bookTitle;
    listItem = [];
    //listItem += ['<option value="empty" class="empty-grey">Buch wählen</option>'];
    listItems.forEach(function(book){
      if(book.bookTitle == checkCurrent){
        listItem += ['<option value="' + book.bookTitle + '" selected>' + book.bookTitle + '</option>'];
      } else {
        listItem += ['<option value="' + book.bookTitle + '">' + book.bookTitle + '</option>']; 
      }
    }); 
    return listItem;
  }
});

//@since 0.8.5
Template.listBooksBilling.helpers({
  listBooksBilling: function() {
    if(Session.get('modalAddBilling')==true){
      var authorId = Session.get('authorId');
      var listItems = Books.find({'affiliateData.authorId': authorId}).fetch();
      var listItem = [];
      listItems.forEach(function(book){
        listItem += ['<option value="' + book._id + '">' + book.bookTitle + '</option>'];
      }); 
      return listItem;
    }  
  }
});