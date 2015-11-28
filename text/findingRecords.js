http://guides.emberjs.com/v2.2.0/models/finding-records/


  /**
   * Single records
   */
  var post = this.store.findRecord('post', 1); // => GET /posts/1
var post = this.store.findRecord('post', 1, { reload: true }); // => GET /posts/1 force reload

var post = this.store.peekRecord('post', 1); // => no network request


/**
 * Multiple records
 */
var posts = this.store.findAll('post'); // => GET /posts

var posts = this.store.peekAll('post'); // => no network request


/**
 * Querying for records
 */
  // GET to /persons?filter[name]=Peter
this.store.query('person', { filter: { name: 'Peter' } }).then(function(peters) {
  // Do something with `peters`
});

/**
 * Querying for a single record
 */
  // GET to /persons?filter[email]=tomster@example.com
this.store.queryRecord('person', { filter: { email: 'tomster@example.com' } }).then(function(tomster) {
  // do something with `tomster`
});
