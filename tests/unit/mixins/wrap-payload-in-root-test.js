import Ember from 'ember';
import WrapPayloadInRootMixin from '../../../mixins/wrap-payload-in-root';
import { module, test } from 'qunit';

module('Unit | Mixin | wrap payload in root');

// Replace this with your real tests.
test('it works', function(assert) {
  var WrapPayloadInRootObject = Ember.Object.extend(WrapPayloadInRootMixin);
  var subject = WrapPayloadInRootObject.create();
  assert.ok(subject);
});
