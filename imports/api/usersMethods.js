import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'users.insert'(username, password) {
    check(username, String);
    check(password, String);
    const userId = Accounts.createUser({
      username,
      password,
    });

    if (!userId) {
      console.log('user not created');
      return;
    }

    Accounts.findUserByUsername(username);
  },
});
