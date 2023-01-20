import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { MoviesCollection } from '../imports/db/MoviesCollection.js';

FlowRouter.route('*', {
  action: function () {
    BlazeLayout.render('notFoundPage');
  },
});

FlowRouter.route('/', {
  name: 'homeRoute',
  action() {
    BlazeLayout.render('layout', { main: 'mainContainer' });
  },
});

FlowRouter.route('/login', {
  name: 'loginRoute',
  action() {
    BlazeLayout.render('layout', { main: 'login' });
  },
});

FlowRouter.route('/signup', {
  name: 'signupRoute',
  action() {
    BlazeLayout.render('layout', { main: 'signup' });
  },
});

FlowRouter.route('/addmovie', {
  name: 'addmovieRoute',
  action() {
    BlazeLayout.render('layout', { main: 'addmovie' });
  },
});

FlowRouter.route('/movie-details', {
  name: 'addmovieRoute',
  action() {},
});

FlowRouter.route('/movie-details/:_id', {
  name: 'movieDetails',
  action(params, queryParams) {
    BlazeLayout.render('layout', { main: 'movieDetails' });
  },
});
