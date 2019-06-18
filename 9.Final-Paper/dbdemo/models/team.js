const db = require('../utils/database');

module.exports = class Team{
    constructor(id, name, title, pic){
       this.id = id;
       this.name = name;
       this.title = title;
       this.pic = pic;
    }

    // READ
    static fetchAll() {
       return db.execute('SELECT * FROM team');
    }

}