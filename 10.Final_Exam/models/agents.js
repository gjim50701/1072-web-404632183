const db = require('../utils/database');

module.exports = class Agents {
  constructor(aid, name, description, pic) {
    this.aid = aid;
    this.name = name;
    this.description = description;
    this.pic = pic;
  }

  // READ
  static fetchAgents() {
    return db.execute('SELECT * FROM agent ');
  }

  
};
