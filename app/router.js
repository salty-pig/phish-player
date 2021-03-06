import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('year', {path: '/years/:year_id'});
  this.route('show', {path: '/shows/:show_id'});
});

export default Router;
