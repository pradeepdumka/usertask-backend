const Sequelize = require('sequelize');
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
//console.log(Constants.MY_APP_CONFIG_PATH + '/db')
const db = require(Constants.MY_APP_CONFIG_PATH + '/db');

const tableName = 'tasks';
const hooks = {};
const Task = db.define('Task', {

    szTask: {
        type: Sequelize.STRING,
        allowNull: true
    },
    intUserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
}, {
    timestamps: false
}, {hooks, tableName });
 

module.exports = Task;

