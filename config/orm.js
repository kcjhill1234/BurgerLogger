const connection = require("./connection")

const query = queryString => new Promise((resolve, reject)=> {
    connection.query(queryString, (error, results)=>{
        if(error) reject(error)
        resolve(results)
    })
})

const orm = {

    selectAll: function () {
        return query(`SELECT * FROM burger`)
    },

    insertOne: function (name) {
        return query(`INSERT INTO burger (burger_name) VALUES ('${name}')`)
    },

    updateOne: function (id) {
        return query(`UPDATE burger SET devoured = 1 WHERE id = ${id}`)
    }

}

module.exports = orm;