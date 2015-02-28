//@since v0.1.1
Rentings = new Mongo.Collection('rentings');

var Schema = {};

Schema.Renting = new SimpleSchema({
  customerId: {
    type: String,
    label: "Kunde",
    optional: true  
  },
  hasPackageS: {
    type: Boolean,
    label: "Paket S"  
  },
  packageS: {
    type: [Object],
    optional: true,
  },
  'packageS.$.tabOne': {
    type: String,
    label: "Tab 1",
    optional: true
  },
  'packageS.$.textOne': {
    type: String,
    label: "Text 1",
    optional: true
  },
  hasPackageM: {
    type: Boolean,
    label: "Paket M"  
  },
  packageM: {
    type: [Object],
    optional: true,
  },
  'packageM.$.tabOne': {
    type: String,
    label: "Tab 1",
    optional: true
  },
  'packageM.$.textOne': {
    type: String,
    label: "Text 1",
    optional: true
  },
  'packageM.$.tabTwo': {
    type: String,
    label: "Tab 2",
    optional: true
  },
  'packageM.$.textTwo': {
    type: String,
    label: "Text 2",
    optional: true
  },
  hasPackageL: {
    type: Boolean,
    label: "Paket L"  
  },
  packageL: {
    type: [Object],
    optional: true,
  },
  'packageL.$.tabOne': {
    type: String,
    label: "Tab 1",
    optional: true
  },
  'packageL.$.textOne': {
    type: String,
    label: "Text 1",
    optional: true
  },
  'packageL.$.tabTwo': {
    type: String,
    label: "Tab 2",
    optional: true
  },
  'packageL.$.textTwo': {
    type: String,
    label: "Text 2",
    optional: true
  },
  'packageL.$.tabThree': {
    type: String,
    label: "Tab 3",
    optional: true
  },
  'packageL.$.textThree': {
    type: String,
    label: "Text 3",
    optional: true
  },
  hasPackageXL: {
    type: Boolean,
    label: "Paket XL"  
  },
  packageXL: {
    type: [Object],
    optional: true,
  },
  'packageXL.$.tabOne': {
    type: String,
    label: "Tab 1",
    optional: true
  },
  'packageXL.$.textOne': {
    type: String,
    label: "Text 1",
    optional: true
  },
  'packageXL.$.tabTwo': {
    type: String,
    label: "Tab 2",
    optional: true
  },
  'packageXL.$.textTwo': {
    type: String,
    label: "Text 2",
    optional: true
  },
  'packageXL.$.tabThree': {
    type: String,
    label: "Tab 3",
    optional: true
  },
  'packageXL.$.textThree': {
    type: String,
    label: "Text 3",
    optional: true
  },
  'packageXL.$.tabFour': {
    type: String,
    label: "Tab 4",
    optional: true
  },
  'packageXL.$.textFour': {
    type: String,
    label: "Text 4",
    optional: true
  },
  hasAddText1: {
    type: Boolean,
    label: "Zusatztext 1"  
  },
  addTextTab1: {
    type: String,
    label: "Tab 1",
    optional: true  
  },
  addText1: {
    type: String,
    label: "Text 1",
    optional: true  
  },
  hasAddText2: {
    type: Boolean,
    label: "Zusatztext 2"  
  },
  addTextTab2: {
    type: String,
    label: "Tab 2",
    optional: true  
  },
  addText2: {
    type: String,
    label: "Text 2",
    optional: true  
  },
  hasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  headerImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  hasHeaderSlider: {
    type: Boolean,
    label: "hat Header-Slider"  
  },
  headerSlider1: {
    type: String,
    label: "Slider1",
    optional: true  
  },
  headerSlider2: {
    type: String,
    label: "Slider2",
    optional: true  
  },
  headerSlider3: {
    type: String,
    label: "Slider3",
    optional: true  
  },
  headerSlider4: {
    type: String,
    label: "Slider4",
    optional: true  
  },
  hasGalleryS: {
    type: Boolean,
    label: "Galerie S"  
  },
  hasGalleryM: {
    type: Boolean,
    label: "Galerie M"  
  },
  hasVideo: {
    type: Boolean,
    label: "Video"  
  },
  videoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },  
  socialMedia: {
    type: Boolean,
    label: "Social Media"  
  },
  rentingsBegin: {
    type: Date,
    optional: true
  },
  rentingsEnd: {
    type: Date,
    optional: true
  },
  rentingsName: {
    type: String,
    label: "Name",
    optional: true
  },
  rentingsUrl: {
    type: String,
    label: "Kanonischer Name",
    optional: true
  },
  street: {
    type: String,
    label: "Strasse",
    optional: true
  },
  additional: {
    type: String,
    label: "Zusatz",
    optional: true
  },
  plz: {
    type: String,
    label: "PLZ",
    optional: true
  },
  city: {
    type: String,
    label: "Ort",
    optional: true
  },
  rentingsRegion: {
    type: String,
    label: "Region",
    optional: true
  },
  rentingsCountry: {
    type: String,
    label: "Land",
    optional: true
  },
  changes: {
    type: [Object],
    optional: true,
  },
  'changes.$.date': {
    type: Date,
    optional: true
  },
  'changes.$.content': {
    type: String,
    optional: true
  },
  'changes.$.user': {
    type: String,
    optional: true
  },
  submitted: {
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

Rentings.attachSchema(Schema.Renting);

Rentings.initEasySearch(['customerName']);

Rentings.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
