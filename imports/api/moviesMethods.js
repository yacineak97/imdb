import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { MoviesCollection } from '../db/MoviesCollection';

Meteor.methods({
  'movies.insert'(title, author, description) {
    check(title, String);
    check(author, String);
    check(description, String);

    const user = Meteor.users.findOne({ _id: this.userId });

    if (user.username != 'admin') {
      throw new Meteor.Error('Not authorized.');
    }

    MoviesCollection.insert({
      title,
      author,
      description,
      createdAt: new Date(),
      userId: this.userId,
    });
  },

  'movies.remove'(movieId) {
    check(movieId, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    const user = Meteor.users.findOne({ _id: this.userId });

    if (user.username != 'admin') {
      throw new Meteor.Error('Not authorized.');
    }

    const movie = MoviesCollection.findOne({
      _id: movieId,
      userId: this.userId,
    });

    if (!movie) {
      throw new Meteor.Error('Access denied.');
    }

    MoviesCollection.remove(movieId);
  },
});
