//since v0.1.1

//-- template created functions
Template.customerEdit.created = function(){
};

//-- template destroyed functions
Template.customerEdit.destroyed = function(){
};

//-- template rendered functions
Template.customerEdit.rendered = function(){
  $('.wysiwyg').editable({inlineMode: false});
};

//-- template helpers                            
Template.customerEdit.helpers({
});

//-- template events
Template.customerEdit.events({ 
  'submit form': function(e){
    e.preventDefault();
    var customerId = this._id;
    var portals = [];
    var changes = [];
    var hasPackageS = false;
    var hasPackageM = false;
    var hasPackageL = false;
    var hasPackageXL = true;
    var hasAddTextOne = true;
    var hasAddTextTwo = true;
    var hasHeaderImg = false;
    var hasHeaderSlider = true;
    var hasGalleryS = false;
    var hasGalleryM = true;
    var hasVideo = true;
    var hasSocialMedia = true;
    
    //checkboxes
    if($(e.target).find('[name=hasPackageS]').is(':checked')) {
      hasPackageS = true;   
    }
    if($(e.target).find('[name=hasPackageM]').is(':checked')) {
      hasPackageM = true;   
    }
    if($(e.target).find('[name=hasPackageL]').is(':checked')) {
      hasPackageL = true;   
    }
    if($(e.target).find('[name=hasPackageXL]').is(':checked')) {
      hasPackageXL = true;   
    }
    if($(e.target).find('[name=hasAddTextOne]').is(':checked')) {
      hasAddTextOne = true;   
    }
    if($(e.target).find('[name=hasAddTextTwo]').is(':checked')) {
      hasAddTextTwo = true;   
    }
    if($(e.target).find('[name=hasHeaderImg]').is(':checked')) {
      hasHeaderImg = true;   
    }
    if($(e.target).find('[name=hasHeaderSlider]').is(':checked')) {
      hasHeaderSlider = true;   
    }
    if($(e.target).find('[name=hasGalleryS]').is(':checked')) {
      hasGalleryS = true;   
    }
    if($(e.target).find('[name=hasGalleryM]').is(':checked')) {
      hasGalleryM = true;   
    }
    if($(e.target).find('[name=hasVideo]').is(':checked')) {
      hasVideo = true;   
    }
    if($(e.target).find('[name=hasSocialMedia]').is(':checked')) {
      hasSocialMedia = true;   
    }
    
    /*
    portals = [{
      date: ,
      id: ,
      name: 
    }]
    */
    
    changes = [{
      date: new Date().getTime(),
      content: 'Kontakt geändert.',
      user: 'Skeltoras'
    }];
    
    var customer = {
      customerName: $(e.target).find('[name=customerName]').val(),
      street: $(e.target).find('[name=street]').val(),
      additional: $(e.target).find('[name=additional]').val(),
      plz: $(e.target).find('[name=plz]').val(),
      city: $(e.target).find('[name=city]').val(),
      country: $(e.target).find('[name=country]').val(),
      telephone: $(e.target).find('[name=telephone]').val(),
      telefax: $(e.target).find('[name=telefax]').val(),
      emailOff: $(e.target).find('[name=emailOff]').val(),
      url: $(e.target).find('[name=url]').val(),
      customerContact: $(e.target).find('[name=customerContact]').val(),
      contactTelephone: $(e.target).find('[name=contactTelephone]').val(),
      contactMobil: $(e.target).find('[name=contactMobil]').val(),
      contactEmail: $(e.target).find('[name=contactEmail]').val(),
      socialFacebook: $(e.target).find('[name=socialFacebook]').val(),
      socialTwitter: $(e.target).find('[name=socialTwitter]').val(),
      socialGplus: $(e.target).find('[name=socialGplus]').val(),
      socialYoutube: $(e.target).find('[name=socialYoutube]').val(),
      notes: $(e.target).find('[name=notes]').val(),
      updatedAt: new Date().getTime()
    }   
    
    var renting = {
      customerId: customerId,
      rentingsStreet: $(e.target).find('[name=rentingsStreet]').val(),
      rentingsAdditional: $(e.target).find('[name=rentingsAdditional]').val(),
      rentingsPlz: $(e.target).find('[name=rentingsPlz]').val(),
      rentingsCity: $(e.target).find('[name=rentingsCity]').val(), 
      rentingsRegion: $(e.target).find('[name=rentingsRegion]').val(),
      rentingsCountry: $(e.target).find('[name=rentingsCountry]').val(),
      hasPackageS: hasPackageS,     
      tabOneS: $(e.target).find('[name=tabOneS]').val(),
      textOneS: $(e.target).find('[name=textOneS]').val(),
      hasPackageM: hasPackageM,
      tabOneM: $(e.target).find('[name=tabOneM]').val(),
      textOneM: $(e.target).find('[name=textOneM]').val(),
      tabTwoM: $(e.target).find('[name=tabTwoM]').val(),
      textTwoM: $(e.target).find('[name=textTwoM]').val(),
      hasPackageL: hasPackageL,
      tabOneL: $(e.target).find('[name=tabOneL]').val(),
      textOneL: $(e.target).find('[name=textOneL]').val(),
      tabTwoL: $(e.target).find('[name=tabTwoL]').val(),
      textTwoL: $(e.target).find('[name=textTwoL]').val(),
      tabThreeL: $(e.target).find('[name=tabThreeL]').val(),
      textThreeL: $(e.target).find('[name=textThreeL]').val(),
      hasPackageXL: hasPackageXL,
      tabOneXL: $(e.target).find('[name=TabOneXL]').val(),
      textOneXL: $(e.target).find('[name=TextOneXL]').val(),
      tabTwoXL: $(e.target).find('[name=TabTwoXL]').val(),
      textTwoXL: $(e.target).find('[name=TextTwoXL]').val(),
      tabThreeXL: $(e.target).find('[name=TabThreeXL]').val(),
      textThreeXL: $(e.target).find('[name=TextThreeXL]').val(),
      tabFourXL: $(e.target).find('[name=TabFourXL]').val(),
      textFourXL: $(e.target).find('[name=TextFourXL]').val(),
      hasAddTextOne: hasAddTextOne,
      addTextTabOne: $(e.target).find('[name=addTextTabOne]').val(),
      addTextOne: $(e.target).find('[name=addTextOne]').val(),
      hasAddTextTwo: hasAddTextTwo,
      addTextTabTwo: $(e.target).find('[name=addTextTabTwo]').val(),
      addTextTwo: $(e.target).find('[name=addTextTwo]').val(),
      hasHeaderImg: hasHeaderImg,
      headerImg: $(e.target).find('[name=headerImg]').val(),
      hasHeaderSlider: hasHeaderSlider,
      headerSliderOne: $(e.target).find('[name=headerSliderOne]').val(),
      headerSliderTwo: $(e.target).find('[name=headerSliderTwo]').val(),
      headerSliderThree: $(e.target).find('[name=headerSliderThree]').val(), 
      headerSliderFour: $(e.target).find('[name=headerSliderFour]').val(),
      hasGalleryS: hasGalleryS,
      hasGalleryM: hasGalleryM,
      hasVideo: hasVideo,
      videoUrl: $(e.target).find('[name=videoUrl]').val(),
      hasSocialMedia: hasSocialMedia,
      rentingsBegin: $(e.target).find('[name=rentingsBegin]').val(),
      rentingsEnd: $(e.target).find('[name=rentingsEnd]').val(),
      rentingsName: $(e.target).find('[name=rentingsName]').val(),
      rentingsUrl: $(e.target).find('[name=rentingsUrl]').val(),
      updatedAt: new Date().getTime()
    } 
    
    var tour = {
      customerId: customerId,
      toursRegion: $(e.target).find('[name=rentingsRegion]').val(),
      toursCountry: $(e.target).find('[name=rentingsCountry]').val(),
      hasPackageS: hasPackageS,     
      tabOneS: $(e.target).find('[name=tabOneS]').val(),
      textOneS: $(e.target).find('[name=textOneS]').val(),
      hasPackageM: hasPackageM,
      tabOneM: $(e.target).find('[name=tabOneM]').val(),
      textOneM: $(e.target).find('[name=textOneM]').val(),
      tabTwoM: $(e.target).find('[name=tabTwoM]').val(),
      textTwoM: $(e.target).find('[name=textTwoM]').val(),
      hasPackageL: hasPackageL,
      tabOneL: $(e.target).find('[name=tabOneL]').val(),
      textOneL: $(e.target).find('[name=textOneL]').val(),
      tabTwoL: $(e.target).find('[name=tabTwoL]').val(),
      textTwoL: $(e.target).find('[name=textTwoL]').val(),
      tabThreeL: $(e.target).find('[name=tabThreeL]').val(),
      textThreeL: $(e.target).find('[name=textThreeL]').val(),
      hasPackageXL: hasPackageXL,
      tabOneXL: $(e.target).find('[name=TabOneXL]').val(),
      textOneXL: $(e.target).find('[name=TextOneXL]').val(),
      tabTwoXL: $(e.target).find('[name=TabTwoXL]').val(),
      textTwoXL: $(e.target).find('[name=TextTwoXL]').val(),
      tabThreeXL: $(e.target).find('[name=TabThreeXL]').val(),
      textThreeXL: $(e.target).find('[name=TextThreeXL]').val(),
      tabFourXL: $(e.target).find('[name=TabFourXL]').val(),
      textFourXL: $(e.target).find('[name=TextFourXL]').val(),
      hasAddTextOne: hasAddTextOne,
      addTextTabOne: $(e.target).find('[name=addTextTabOne]').val(),
      addTextOne: $(e.target).find('[name=addTextOne]').val(),
      hasAddTextTwo: hasAddTextTwo,
      addTextTabTwo: $(e.target).find('[name=addTextTabTwo]').val(),
      addTextTwo: $(e.target).find('[name=addTextTwo]').val(),
      hasHeaderImg: hasHeaderImg,
      headerImg: $(e.target).find('[name=headerImg]').val(),
      hasHeaderSlider: hasHeaderSlider,
      headerSliderOne: $(e.target).find('[name=headerSliderOne]').val(),
      headerSliderTwo: $(e.target).find('[name=headerSliderTwo]').val(),
      headerSliderThree: $(e.target).find('[name=headerSliderThree]').val(), 
      headerSliderFour: $(e.target).find('[name=headerSliderFour]').val(),
      hasGalleryS: hasGalleryS,
      hasGalleryM: hasGalleryM,
      hasVideo: hasVideo,
      videoUrl: $(e.target).find('[name=videoUrl]').val(),
      hasSocialMedia: hasSocialMedia,
      rentingsBegin: $(e.target).find('[name=rentingsBegin]').val(),
      rentingsEnd: $(e.target).find('[name=rentingsEnd]').val(),
      rentingsName: $(e.target).find('[name=rentingsName]').val(),
      rentingsUrl: $(e.target).find('[name=rentingsUrl]').val(),
      updatedAt: new Date().getTime()
    }    
   
    
    Meteor.call('updateCustomer', customerId, customer, function(error, result) {
      /*
      if (result) {
        var authorId = result;
        Router.go('author.show', {_id: authorId});
      } else {
        Router.go('author.list');
      } 
      */     
    });
    //Meteor.call('updateRenting', customerId, renting, function(error, result) {
      /*
      if (result) {
        var authorId = result;
        Router.go('author.show', {_id: authorId});
      } else {
        Router.go('author.list');
      } 
      */     
    //});
    
    Meteor.call('updateTour', customerId, tour, function(error, result) {
      /*
      if (result) {
        var authorId = result;
        Router.go('author.show', {_id: authorId});
      } else {
        Router.go('author.list');
      } 
      */     
    });
    console.log(customer); //debug
    console.log('---'); //debug
    console.log(renting); //debug
  }
});