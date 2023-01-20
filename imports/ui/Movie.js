import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './Movie.html';

Template.movie.events({
  'click #delete'(event) {
    event.stopPropagation();
    Meteor.call('movies.remove', this._id);
  },
  'click .movie-card'() {
    FlowRouter.go('movieDetails', { _id: this._id });
  },
});

Template.movie.helpers({
  authorizedAdmin() {
    const user = Meteor.user();
    if (user.username != 'admin') {
      return false;
    }
    return true;
  },
});
