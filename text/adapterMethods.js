* shouldReloadAll / shouldReloadRecord - default false
* shouldBackgroundReloadAll / shouldBackgroundReloadRecord - default true


/**
 * reload
 */

  shouldReloadAll: function(store, snapshotRecordArray) {
    return !snapshotRecordArray.length;
  },

  shouldReloadRecord: function(store, snapshot) {
    return false;
  },




/**
 * Background
 */
  shouldBackgroundReloadAll: function(store, snapshotRecordArray) {
    return true;
  }

  shouldBackgroundReloadRecord: function(store, snapshot) {
    return true;
  },
