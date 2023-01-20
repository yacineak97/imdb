import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function publishMovies() {
  return Meteor.users.find({});
});
