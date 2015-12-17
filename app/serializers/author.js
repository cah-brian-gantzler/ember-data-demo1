import applicationSerializer from './application';

export default applicationSerializer.extend({
    attrs: {
        firstName: 'first_name',
        lastName: 'last_name'
    }
});
