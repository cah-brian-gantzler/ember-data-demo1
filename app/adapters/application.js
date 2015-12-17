import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',

    shouldReloadRecord: function(store, snapshot) {
        var lad = snapshot.record.get('lastAccessDate');
        if (lad &&
            (new Date().getTime() - lad.getTime()) / 60000 > 20 ) {
            return true;
        } else {
            return false;
        }
    }
});
