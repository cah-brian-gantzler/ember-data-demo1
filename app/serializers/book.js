import applicationSerializer from './application';

export default applicationSerializer.extend({
    attrs: {
        title: { key: "bookName" }
    }
});
