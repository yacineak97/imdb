import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { MoviesCollection } from '../db/MoviesCollection';
import { Tracker } from 'meteor/tracker';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './App.html';
import './Layout.html';
import './Movie.js';
import './Login.js';
import './Signup.js';
import './404.html';
import './AddMovie.js';
import './MovieDetails.js';

const IS_LOADING_STRING = 'isLoading';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.mainContainer.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();

  const handler = Meteor.subscribe('movies');
  Tracker.autorun(() => {
    this.state.set(IS_LOADING_STRING, !handler.ready());
  });
});

Template.layout.events({
  'click .logout'() {
    Meteor.logout();
  },
});

Template.mainContainer.helpers({
  movies() {
    if (!isUserLogged()) {
      return [];
    }

    return MoviesCollection.find(
      {},
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
  },
  isUserLogged() {
    if (isUserLogged()) {
      FlowRouter.go('homeRoute');
      return true;
    } else {
      FlowRouter.go('loginRoute');
      return false;
    }
  },
  getUser() {
    return getUser();
  },
  isLoading() {
    const instance = Template.instance();
    return instance.state.get(IS_LOADING_STRING);
  },
  authorizedAdmin() {
    const user = Meteor.user();
    if (user.username != 'admin') {
      return false;
    }
    return true;
  },
});

Template.layout.helpers({
  getUser() {
    return getUser();
  },
  isUserLogged() {
    if (isUserLogged()) {
      FlowRouter.go('homeRoute');
      return true;
    } else {
      FlowRouter.go('loginRoute');
      return false;
    }
  },
});
