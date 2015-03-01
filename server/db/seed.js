if (Customers.find().count() === 0) {
  for (i = 0; i <= 10; i++) {
    customer = Fake.user({fields: ['name', 'surname', 'fullname', 'email']});
    street = Fake.fromArray(['Gerbergasse 12', 'Hauptstr. 21']);
    additional  = Fake.fromArray(['', '', 'Vereinsheim', 'c/o Gedöns']);
    plz = _.random(10000, 99999);
    city = Fake.word();
    country = 'Deutschland';
    telephone = _.random(1809255, 9999999);
    telefax =  _.random(1809255, 9999999);
    emailOff = customer.email;
    url = "http://www.info3.de";
    socialFacebook = "http://www.info3.de";
    socialTwitter = "http://www.info3.de";
    socialGplus = "http://www.info3.de";
    socialYoutube = "http://www.info3.de";
    notes = Fake.sentence(2);;
    submitted = new Date().getTime();
    updatedAt = new Date().getTime();
    
    
    customerId = Customers.insert({
      customerName: customer.fullname,
      street: street,
      additional: additional,
      plz: plz,
      city: city,
      country: country,
      telephone: telephone,
      telefax: telefax,
      emailOff: emailOff,
      url: url,
      socialFacebook: socialFacebook,
      socialTwitter: socialTwitter,
      socialGplus: socialGplus,
      socialYoutube: socialYoutube,
      notes: notes,
      portals: [{date: new Date().getTime(), name: 'Vermietung'}],
      submitted: submitted,
      updatedAt: updatedAt
    });
    
    Rentings.insert({
      customerId: customerId,
      hasPackageS: false,
      hasPackageM: false,
      hasPackageL: false,
      hasPackageXL: true,
      hasAddText1: true,
      hasAddText2: true,
      hasHeaderImg: false,
      hasHeaderSlider: true,
      hasGalleryS: false,
      hasGalleryM: true,
      hasVideo: true,      
      socialMedia: true,
      rentingsBegin: submitted,
      rentingsEnd: submitted,
      rentingsName: 'Ferienhaus ' + customer.fullname,
      rentingsUrl: url,
      street: street,
      additional: additional,
      plz: plz,
      city: city,
      rentingsRegion: 'Schwarzwald',
      rentingsCountry: 'Deutschland',
      submitted: submitted,
      updatedAt: submitted  
    });
    
  }
};

if (Portals.find().count() === 0) {
  Portals.insert({
    portalName: 'Reisen',    
    submitted: new Date().getTime(),
    updatedAt: new Date().getTime()
  });
  Portals.insert({
    portalName: 'Vermietungen',    
    submitted: new Date().getTime(),
    updatedAt: new Date().getTime()
  });
}