import Ember from 'ember';
import DS from 'ember-data';
import baseModel from './base';

export default baseModel.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),

    fullName: Ember.computed("firstName", "lastName", {
        get: function() {
            return this.get("lastName") + ", " + this.get("firstName");
        }
    })
});
