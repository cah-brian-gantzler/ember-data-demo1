import Ember from 'ember';

/**
 * Include this mix to unwrap a payload from the root key
 *
 * Typically used on outgoing JSON
 */
export default Ember.Mixin.create({
    /**
     * Should the ID be in the Json
     */
    includeId: true,

    /**
     * You can use this method to customize the root keys serialized into the JSON
     *
     * Allow for the ability to NOT wrap the json in a root key
     *
     * Force the Primary Key to be in the Json
     *
     * @param hash
     * @param type
     * @param record
     * @param options
     */
    serializeIntoHash: function(hash, type, record, options) {
        options = options || {};

        options.includeId = this.includeId;

        var properties = this.serialize(record, options);

        Ember.merge(hash, properties);
    }
});