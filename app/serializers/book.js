import applicationSerializer from './application';

export default applicationSerializer.extend({
    attrs: {
        title: { key: "bookName" },
        author: { key: "authorId", serialize: "ids", deserialize: "ids" }
    }
});
