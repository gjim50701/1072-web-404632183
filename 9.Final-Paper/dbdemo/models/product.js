const db = require('../utils/database');

module.exports = class Product{
    constructor(id, name, price){
       this.id = id;
       this.name = name;
       this.price = price;
    }

    // READ
    static fetchAll() {
       return db.execute('SELECT * FROM product');
    }

}