import Ember from 'ember';

/**
 * Including this mixin will take a payload, and wrap that that payload in the root key
 *
 * Ember data 1.13+
 *
 * Typically used on incoming JSON
 */
export default Ember.Mixin.create({
    /**
     * Wrap the payload in the key if needed
     *
     * @param {String} payload - The payload to check
     * @param {String} keyName - The key Name to check
     * @param {String} isArray - Should this be an array
     * @return {String} payload - The new payload
     */
    wrapRootInKey: function(payload, keyName, isArray) {
        // If the key doesnt exist in the payload,
        // wrap it in the key
        if (Ember.isNone(payload[keyName])) {
            var elements = payload;
            // If the elements to wrap are NOT an array,
            // make them an array of one
            if (isArray && Ember.isArray(elements) === false) {
                elements = Ember.A(elements);
            }

            payload = {};
            payload[keyName] = elements;
        }

        return payload;
    },

    /**
     Hook to mug the Json for a single before Ember gets it

     @method normalizeSingleResponse
     @param {DS.Store} store
     @param {DS.Model} primaryType
     @param {Object} payload
     @param {String} recordId
     @return {Object} json The deserialized payload
     */
    normalizeSingleResponse: function(store, primaryType, payload, recordId) {
        var typeKey = primaryType.modelName ? primaryType.modelName : primaryType.typeKey;

        payload = this.wrapRootInKey(payload, typeKey, false);

        return this._super(store, primaryType, payload, recordId);
    },

    /**
     Hook to mug the Json for an array before Ember gets it

     @method normailzeArrayResponse
     @param {DS.Store} store
     @param {DS.Model} primaryType
     @param {Object} payload
     @return {Array} array An array of deserialized objects
     */
    normalizeArrayResponse: function(store, primaryType, payload) {
        var typeKey = primaryType.modelName ? primaryType.modelName : primaryType.typeKey;
        var pluralTypeName = Ember.Inflector.inflector.pluralize(typeKey);

        payload = this.wrapRootInKey(payload, pluralTypeName, true);

        return this._super(store, primaryType, payload);
    }

});
