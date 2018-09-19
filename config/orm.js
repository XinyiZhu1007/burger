var connection = require('./connection');

Orm = {

    selectAll: function(tableName, callback) {
        var query = `select * from ${tableName}`;
        connection.query(query, (err, data) => {
            if (err) {
                console.log(err);
                return false;
            };
            callback(data);
        })
    },

    insertOne: function(tableName, column, inputVal, callback) {
        var query = `insert into ${tableName} (${column}) values (?)`;
        connection.query(query, inputVal, (err, data) => {
            if (err) {
                console.log(err);
                return false;
            };
            callback(data);
        })
    },

    updateOne: function(tableName, column, columnVal, condition, conditionVal, callback) {
        var query = `update ${tableName} set ${column} = ? where ${condition} = ?`;
        connection.query(query, [columnVal, conditionVal], (err, data) => {
            if(err) {
                console.log(err);
                return false;
            };
            callback(data);
        })

    }

    // deleteOne: function(tableName, condition, conditionVal, callback) {
    //     var query = `delete table ${tableName} where ${consition} = ?`;
    //     connection.query(query, conditionVal, (err, data) => {
    //         if(err) {
    //             console.log(err);
    //             return false;
    //         };
    //         callback(data);
    //     })
    // }

};



module.exports = Orm;
