import DS from 'ember-data';

import unwrap from '../mixins/unwrap-payload-in-root';
import wrap from '../mixins/wrap-payload-in-root';

/**
 *
 * Transform the JSON to conform with current Services
 *
 * Deserialize (incoming) - Package the Json in the Model Root key
 *
 *
 * Serialize (outgoing) - Unpackage the Json from the Model Root key
 *                        Force the Primary Key to be in the Json for Update
 *
 */
export default DS.RESTSerializer.extend(wrap, unwrap, DS.EmbeddedRecordsMixin, {
    attr: {
        lastAccessDate: { serialize: false }
    },

    normalize: function(modelClass, resourceHash, prop) {
        resourceHash.lastAccessDate = new Date().getTime();
        return this._super(modelClass, resourceHash, prop);
    }
});
