//@since v0.1.1
Meteor.publish('customers', function() {
  return Customers.find();
});

Meteor.publish('rentings', function() {
  return Rentings.find();
});

Meteor.publish('portals', function() {
  return Portals.find();
});

Meteor.publish('tours', function() {
  return Tours.find();
});

Meteor.publish('regions', function() {
  return Regions.find();
});