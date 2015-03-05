Meteor.publish('avHome', function() {
  return AvCustomers.find({}, {limit: 15, sort: {avRandomSort: -1}});
});

Meteor.publish('avCount', function() {
  return AvCustomers.find({});
});