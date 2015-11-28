# Demo Application (Work in progress. Currently being rebased and force push) 

  RESTORING SANITY TO JAVASCRIPT DEVELOPMENT WITH EMBER 2
  Pfefferle, Kevin


# "Initial-create" - Nothing more than am ember new. Base application
# "mirage" - Initial data framework

### framework

* adapter - RESTAdapter
  
  Explain application adapter
  
  Explain JsonApiAdapter
  
  [other adapters](https://github.com/search?q=ember+data+adapter&ref=cmdform)

* serializer - RestSerializer
  
  explain application serializer
    
    * Json responses
        * [Probable response](../mirage/text/raw-json/json-ember-data-1.txt)
        * [RestSerializer expects](../mirage/text/raw-json/json-ember-data-2.txt)
    * Mixins
        * [Wrap](../mixins/wrap-payload-in-root.js)
        * [Unwrap](../mixins/unwrap-payload-in-root.js)
        * embedded records 
* mirage
  
    * config
    * fixture data

### Displaying the list of books


* model book 
    create a mode definition of book - inherit base 
    add title
  
    ```
    import DS from 'ember-data';
    import baseModel from './base';
    
    export default baseModel.extend({
      title: DS.attr()
    });
    ```
  
* serializer book
  create a serializer inherit application
    * bookName to title

    ```
    import applicationSerializer from './application';
    
    export default applicationSerializer.extend({
        attrs: {
            title: { key: "bookName" }
        }
    });
    ```
    
* Index Route 
    write a model function
    
    ```
    model: function() {
        return this.store.findAll("book");
    }
    ```
* Index template
    write an each loop
    
    ```
    {{#each model as |book index|}}
        <div>{{index}} {{book.title}}</div>
    {{/each}}
    ```
    
* run application
  show mirage request for books
  show ember inspector data

# "relationship"
* create author model - inherit base
    firstName - last Name
    fullName property
  
    ```
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
    ```
* create author serializer
    inherit application
    fix first_name, last_name
    
    ```
    import applicationSerializer from './application';
    
    export default applicationSerializer.extend({
        attrs: {
            firstName: { key: "first_name" },
            lastName: { key: "last_name" }
        }
    });
    ```
    
* Add author to book model
    Explain belongsTo / hasMany
    Async: true

    ```  remember comma on title
    	author: DS.belongsTo("author", { async: true })
    ```

* add author to book serializer
    * explain key
    * explain serialize / deserialize - "ids", "records", false
    
    ```
      author: { key: "authorId", serialize: "ids", deserialize: "ids" }
    ```

* add author to index.hbs
    ```
    <div>books</div>
    {{#each model as |book index|}}
        <div>{{index}} {{book.title}} - {{book.author.fullName}}</div>
    {{/each}}
    ```
    
* run application
  show mirage requests for author - lazy load
  show ember inspector data for author

* explain store methods
    [finding records](http://guides.emberjs.com/v2.2.0/models/finding-records/)
    [finding records example](./text/findingRecords.js)
    
    * findAll / findRecord - {reload: true} 
    * peekAll / peekRecord 
    * query / queryRecord
    
* adapter methods 
    [adapter methods example](./text/adapterMethods.js)
    
    * shouldReloadAll / shouldReloadRecord - default false
    * shouldBackgroundReloadAll / shouldBackgroundReloadRecord - default true
    
    * You could add a default field to all models (application)
      ```
      createdAt: DS.attr('date', {
          defaultValue() { return new Date(); }
        })
      ```
      change the serializer (application) to NOT serialize this value
      ```
      attr: {
        createdAt: { serialize: false }
      }
      ```
      Alter the adapter to check time and reload at 20 min say
      shouldBackgroundReloadRecord: function(store, snapshot) {
        let minute = 60*1000;
        let difference = new Date() - snapshot.get("createdAt");
        return difference / minute > 20;
      },
    
* model properties
    * hasDirtyAttributes
    * changedAttributes
    * dirtyType - created, updated, deleted
    * isDeleted / isNew / isLoaded / isReloading / isSaving / isEmpty 

* mixins for model properties

# "crud"
* Unload / Refresh
    * Create buttons in index.hbs for unload and refresh
    ```
    <div>
        <button {{action 'unload'}}>Unload</button>
        <button {{action 'refresh'}}>Refresh</button>
    </div>
    ```
    * Create Controller for index
    * Create actions to handle unload and refresh
    ```
        actions: {
            unload() {
                this.store.unloadAll('book');
            },
            refresh() {
                this.store.findAll('book');
            }
    ```

    * show app
    
* createRecord 
    * create button to add in index.hbs 
    ```
    <div>
        <button {{action 'add'}}>Add</button>
    </div>
    ```
    * Create action to add
      NOTE can not add relationship that is a promise
    ```
            add() {
                this.store.createRecord('book', {
                    title: 'Rails is Omakase',
                    author: this.store.peekRecord('author', 'a1')
                });
            },
    ```
    
    * show app
    
* Save record
    * Create the save button in index.hbs
    ```
            {{#if book.hasDirtyAttributes}}
                <button {{action 'save' book}}>Save</button>
            {{/if}}
    ```
    
    * Create the save action
    ```
            save(model) {
                model.save().then(
                    (model) => {},
                    (model) => {}
                );
            },
    ```
    ```
            save(model) {
                model.save().then(
                    function(model) {},
                    function(model) {}
                );
            },

    ```
    
    * show app - post fails
    
    * Fix Mirage
    ```
        this.post("/books", function(db, request) {
            var attrs = JSON.parse(request.requestBody);
            var book = db.books.insert(attrs);
            return book;
        });
    ```
    
    show app = post is persisted thanks to mirage
# Ember-data-demo1

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

