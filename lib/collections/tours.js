//@since v0.1.1
Tours = new Mongo.Collection('tours');

var Schema = {};

Schema.Tour = new SimpleSchema({
  customerId: {
    type: String,
    label: "Kunde",
    optional: true  
  },
  toursName: {
    type: String,
    label: "Name",
    optional: true
  },
  toursCanonicalUrl: {
    type: String,
    label: "Kanonischer Name",
    optional: true
  },
  toursUrl: {
    type: String,
    label: "Kanonischer Name",
    optional: true
  },
  toursRegion: {
    type: String,
    label: "Region",
    optional: true
  },
  toursCountry: {
    type: String,
    label: "Land",
    optional: true
  },
  hasPackageS: {
    type: Boolean,
    label: "Paket S"  
  },
  tabOneS: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  textOneS: {
    type: String,
    label: "Text 1",
    optional: true
  },
  hasPackageM: {
    type: Boolean,
    label: "Paket M"  
  },
  tabOneM: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  textOneM: {
    type: String,
    label: "Text 1",
    optional: true
  },
  tabTwoM: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  textTwoM: {
    type: String,
    label: "Text 2",
    optional: true
  },
  hasPackageL: {
    type: Boolean,
    label: "Paket L"  
  },
  tabOneL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  textOneL: {
    type: String,
    label: "Text 1",
    optional: true
  },
  tabTwoL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  textTwoL: {
    type: String,
    label: "Text 2",
    optional: true
  },
  tabThreeL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  textThreeL: {
    type: String,
    label: "Text 3",
    optional: true
  },
  hasPackageXL: {
    type: Boolean,
    label: "Paket XL"  
  },
  tabOneXL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  textOneXL: {
    type: String,
    label: "Text 1",
    optional: true
  },
  tabTwoXL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  textTwoXL: {
    type: String,
    label: "Text 2",
    optional: true
  },
  tabThreeXL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  textThreeXL: {
    type: String,
    label: "Text 3",
    optional: true
  },
  tabFourXL: {
    type: String,
    label: "Tab 4",
    optional: true
  },
  textFourXL: {
    type: String,
    label: "Text 4",
    optional: true
  },
  hasAddTextOne: {
    type: Boolean,
    label: "Zusatztext 1"  
  },
  addTextTabOne: {
    type: String,
    label: "Tab 1",
    optional: true  
  },
  addTextOne: {
    type: String,
    label: "Text 1",
    optional: true  
  },
  hasAddTextTwo: {
    type: Boolean,
    label: "Zusatztext 2"  
  },
  addTextTabTwo: {
    type: String,
    label: "Tab 2",
    optional: true  
  },
  addTextTwo: {
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
  headerSliderOne: {
    type: String,
    label: "Slider1",
    optional: true  
  },
  headerSliderTwo: {
    type: String,
    label: "Slider2",
    optional: true  
  },
  headerSliderThree: {
    type: String,
    label: "Slider3",
    optional: true  
  },
  headerSliderFour: {
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
  hasSocialMedia: {
    type: Boolean,
    label: "Social Media"  
  },
  toursBegin: {
    type: Date,
    optional: true
  },
  toursEnd: {
    type: Date,
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

Tours.attachSchema(Schema.Tour);

Tours.initEasySearch(['customerName']);

Tours.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
