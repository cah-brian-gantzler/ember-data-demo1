import applicationSerializer from './application';

export default applicationSerializer.extend({
    attrs: {
        firstName: { key: "first_name" },
        lastName: { key: "last_name" }
    }
});
