const User = require('../models/Users');
const Post = require('../models/Posts');
const List = require('../models/Lists');

function Relations() {
    User.hasMany(List, { foreignKey: 'user_Id' });
    List.belongsTo(User, { foreignKey: 'user_Id' });

    List.hasMany(Post, { foreignKey: 'listId' });
    Post.belongsTo(List, { foreignKey: 'listId' });
}

module.exports = {
    Relations,
};
