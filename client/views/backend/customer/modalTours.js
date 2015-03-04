//-- template created functions
Template.modalTours.created = function(){
};

//-- template destroyed functions
Template.modalTours.destroyed = function(){
};

//-- template rendered functions
Template.modalTours.rendered = function(){
};

//-- template helpers                            
Template.modalTours.helpers({
  getPackage: function() {
    return Session.get('toursPackage');
  },
  packageS: function() {
    if(Session.get('toursPackage') == 'S')
      return true;     
  },
  packageM: function() {
    if(Session.get('toursPackage') == 'M')
      return true;     
  },
  packageL: function() {
    if(Session.get('toursPackage') == 'L')
      return true;     
  },
  packageXL: function() {
    if(Session.get('toursPackage') == 'XL')
      return true;     
  },
  getGalleryS: function(){
    if(Session.get('toursGallery')==1)
      return true;
  },
  getGalleryM: function(){
    if(Session.get('toursGallery')==2)
      return true;
  },
  getTextOne: function(){
    return Session.get('toursTextOne');
  },
  getTextTwo: function(){
    return Session.get('toursTextTwo');
  },
  getVideo: function(){
    return Session.get('toursVideo');
  }
});

//-- template events
Template.modalTours.events({
});