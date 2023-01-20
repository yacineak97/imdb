import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { MoviesCollection } from '../db/MoviesCollection.js';
import './Moviedetails.html';

Meteor.subscribe('users');

Template.movieDetails.helpers({
  movie() {
    const movie = MoviesCollection.find({
      _id: FlowRouter.getParam('_id'),
    }).fetch();

    const user = Meteor.users.findOne({ _id: movie[0].userId });

    let timestamps = Date.parse(movie[0].createdAt);
    let date = new Date(timestamps);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateFormatted = `${day}/${month}/${year}`;

    return {
      title: movie[0].title,
      author: movie[0].author,
      description: movie[0].description,
      createdAt: dateFormatted,
      username: user.username,
    };
  },
});
