const User = require('./user');
const Listing = require('./listing');

Listing.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Listing };