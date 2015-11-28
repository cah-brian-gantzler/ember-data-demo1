import Ember from 'ember';
import UnwrapPayloadInRootMixin from '../../../mixins/unwrap-payload-in-root';
import { module, test } from 'qunit';

module('Unit | Mixin | unwrap payload in root');

// Replace this with your real tests.
test('it works', function(assert) {
  var UnwrapPayloadInRootObject = Ember.Object.extend(UnwrapPayloadInRootMixin);
  var subject = UnwrapPayloadInRootObject.create();
  assert.ok(subject);
});
