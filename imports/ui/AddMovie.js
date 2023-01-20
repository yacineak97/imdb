import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './AddMovie.html';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.addmovie.events({
  'submit .movie-form'(event) {
    event.preventDefault();

    const { target } = event;

    const title = target.title.value;
    const author = target.author.value;
    const description = target.description.value;

    Meteor.call('movies.insert', title, author, description);

    FlowRouter.go('homeRoute');
    // Clear form
    target.title.value = '';
    target.author.value = '';
    target.description.value = '';
  },
});
