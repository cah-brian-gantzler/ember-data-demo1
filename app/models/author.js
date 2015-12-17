import Ember from 'ember';
import DS from 'ember-data';
import baseModel from './base-model';

export default baseModel.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),

    fullName: Ember.computed('firstName', 'lastName', {
        get: function() {
            return this.get('lastName') + ', ' + this.get('firstName');
        }
    })
});
