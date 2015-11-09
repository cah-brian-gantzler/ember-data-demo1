# Demo Application (Work in progress. Currently being rebased and force push) 

# "Initial-create" - Nothing more than am ember new. Base application
# "mirage" - Initial data framework
### framework
* adapter - RESTAdapter
* serializer - RestSerializer
    * Json responses
        * [Probable response](../mirage/text/raw-json/json-ember-data-1.txt)
        * [RestSerializer expects](../mirage/text/raw-json/json-ember-data-2.txt)
    * Mixins
        * Wrap
        * Unwrap
        * embedded records 
* mirage
* fixture data

### Displaying the list of books
* Index Route - model function
* Index template - each loop
* model book - definition of book - inherit base 
    * add title
* serializer - inherit application
    * bookName to title

# "relationship"
* create author model - inherit base
* fullName property
* create author serializer - inherit application
    * fix first_name, last_name
* Add author to book model - belongsTo / hasMany
    * Async: true
* add author to book serializer
    * serialize / deserialize - "ids", "records", false

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

