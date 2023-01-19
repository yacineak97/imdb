import { Accounts } from 'meteor/accounts-base';

Accounts.onLogin(function () {
  localStorage.setItem('Meteor.loginToken', Accounts._storedLoginToken());
});

Accounts.onLogout(function () {
  localStorage.removeItem('Meteor.loginToken');
});
