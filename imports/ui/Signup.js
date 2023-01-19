import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Signup.html';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.signup.events({
  'submit .signup-form'(event) {
    event.preventDefault();

    const { target } = event;

    const username = target.username.value;
    const password = target.password.value;
    const password2 = target.password2.value;

    if (password != password2) {
      console.log('Mismatch password');
      return;
    }

    Meteor.call('users.insert', username, password);

    Meteor.loginWithPassword(username, password);
    FlowRouter.go('homeRoute');
    // Clear form
    target.username.value = '';
    target.password.value = '';
    target.password2.value = '';
  },
});
