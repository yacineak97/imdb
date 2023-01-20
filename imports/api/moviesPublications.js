import { Meteor } from 'meteor/meteor';
import { MoviesCollection } from '/imports/db/MoviesCollection';

Meteor.publish('movies', function publishMovies() {
  return MoviesCollection.find({});
});
