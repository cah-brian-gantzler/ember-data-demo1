import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        add() {
            this.store.createRecord('book', {
                title: 'Rails is Omakase',
                author: this.store.peekRecord('author', 'a1')
            });
        },
        save(model) {
            model.save().then(
                (model) => {},
                (model) => {}
            );
        },
        unload() {
            this.store.unloadAll('book');
        },
        refresh() {
            this.store.findAll('book');
        }
    }
});
