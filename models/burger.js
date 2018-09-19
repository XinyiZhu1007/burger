var orm = require('../config/orm');

var burger = {
    selectAll: function(callback) {
        orm.selectAll('burgers', function(res) {
            callback(res);
        })
    },

    insertOne: function(input, callback) {
        orm.insertOne('burgers', 'burger_name', input, function(res) {
            callback(res);
        })
    },

    updateOne: function(conditionVal, callback) {
        orm.updateOne('burgers', 'devoured', 1, 'id', conditionVal, function(res){
            callback(res);
        })
    }

    // deleteOne: function(conditionVal, callback) {
    //     orm.deleteOne('burgers', 'id', conditionVal, function(res) {
    //         callback(res);
    //     })
    // }
}

module.exports = burger;