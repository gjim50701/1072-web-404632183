const db = require('../utils/database');

module.exports = class  Tours {
  constructor(tid, tour_name, place,days,nigths,person_name, pic) {
    this.tid = tid;
    this.tour_name = tour_name;
    this.place=place;
    this.days = days;
    this.nigths = nigths;
    this.person_name = person_name;
    this.pic = pic;
  }

  // READ
  static fetchRecent() {
    return db.execute('SELECT * FROM tour');
  }
  
  static fetchGallery() {
    return db.execute('SELECT pic FROM tour');
  }

  
};
