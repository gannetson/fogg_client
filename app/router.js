import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: ''});

  this.route('users');
  this.route('user', {path: 'user/:user_id'});

  this.route('countries');
  this.route('country', {path: 'country/:country_id'});
});

export default Router;
