// In-memory user storage
const users = [];

class User {
  static async findOne(query) {
    if (query.email) {
      return users.find(user => user.email === query.email);
    }
    return null;
  }

  static async findById(id) {
    return users.find(user => user._id === id);
  }

  static async findOneAndUpdate(filter, update, options = {}) {
    let user = this.findOne(filter);
    
    if (!user && options.upsert) {
      user = { 
        _id: Date.now().toString(), 
        ...update,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      users.push(user);
    } else if (user) {
      Object.assign(user, update);
      user.updatedAt = new Date();
    }
    
    return user;
  }
}

module.exports = User;
