import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //Escribirle el path / a este route creado por mi hace que el homepage
  //sea este route. 
  this.route('to-do', {path: '/'}, function() {
    this.route('add');
  });
});

export default Router;
