import DS from 'ember-data';
import baseModel from './base-model';

export default baseModel.extend({
	title: DS.attr('string'),

	author: DS.belongsTo('author', { async: true } )
});
