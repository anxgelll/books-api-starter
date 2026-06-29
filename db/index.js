const { Sequelize } = require('sequelize')

// Workshop Part 1: create a new Sequelize instance pointed at your
// books_api database, then export it.
// NOTE: this machine's postgres superuser is your Mac username (angelmacneo),
// not "postgres" — there is no "postgres" role here.
const dbConnection = new Sequelize('postgres://angelmacneo@localhost:5432/books_api')

module.exports = dbConnection