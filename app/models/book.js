import DS from 'ember-data';
import baseModel from './base';

export default baseModel.extend({
	title: DS.attr(),
	author: DS.belongsTo("author", { async: true })
});