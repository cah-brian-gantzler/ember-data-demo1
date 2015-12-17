import DS from 'ember-data';

export default DS.Model.extend({
    lastAccessDate: DS.attr('date')
});
