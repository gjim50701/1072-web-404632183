const db = require('../utils/database');

module.exports = class Portfolio{
    constructor(id, name, category, pic){
       this.id = id;
       this.name = name;
       this.category = category;
       this.pic = pic;
    }

    // READ
    static fetchAll() {
       return db.execute('SELECT * FROM portfolio');
    }

}