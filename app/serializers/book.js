import applicationSerializer from './application';

export default applicationSerializer.extend({
    attrs: {
        title: 'bookName',
        author: { key: 'authorId', serialize: 'ids', deserialize: 'ids' }
    }
});
