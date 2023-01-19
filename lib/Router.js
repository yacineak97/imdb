import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

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
