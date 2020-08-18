const orm = require("../config/orm")


const burger = {
    getAll: function () {
        return orm.selectAll()
    },
    create: function (name) {
        return orm.insertOne(name)
    },
    update: function (id) {
        return orm.updateOne(id)
    }
}

module.exports = burger