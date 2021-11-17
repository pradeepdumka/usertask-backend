const Sequelize = require('sequelize');
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
//console.log(Constants.MY_APP_CONFIG_PATH + '/db')
const db = require(Constants.MY_APP_CONFIG_PATH + '/db');

const TaskModel= require(Constants.MY_APP_MODEL_PATH + '/Task.Model');
const hooks = {};
const tableName = 'users';

const User = db.define('User', {

    szUserName: {
        type: Sequelize.STRING,
        allowNull: true
    }
    
}, {
    timestamps: false
}, { hooks,tableName })


module.exports = User

