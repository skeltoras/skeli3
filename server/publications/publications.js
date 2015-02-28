//@since v0.1.1
Meteor.publish('customers', function() {
  return Customers.find();
});
Meteor.publish('rentings', function() {
  return Rentings.find();
});