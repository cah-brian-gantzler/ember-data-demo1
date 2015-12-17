import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        add: function() {
            var book = this.store.createRecord('book', {
                title: 'Rails is Omakase',
                author: this.store.peekRecord('author', 'a1')
            });
            this.store.findRecord('author', 'a1');
        },
        save: function(model) {
            model.save().then(
                function(model) {
                    return model;
                },
                function(reason) {
                    throw new Error(reason);
                }
            );
        },
        unload: function() {
            this.store.unloadAll('book');
        },
        refresh: function() {
            this.store.findAll('book');
        }
    }
});
