import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list', {path: '/'});

  this.route('tasks', function() {
    this.route('new', {path:'/tasks/new'});
    this.route('edit',{path:'/edit/:task_id'});
  });
});

export default Router;
