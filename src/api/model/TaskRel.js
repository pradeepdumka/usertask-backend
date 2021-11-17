const Sequelize = require('sequelize');
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
console.log(Constants.MY_APP_CONFIG_PATH + '/db')
const sequelize = require(Constants.MY_APP_CONFIG_PATH + '/db');


const TaskRel = {};

TaskRel.Sequelize = Sequelize;
TaskRel.sequelize = sequelize;


TaskRel.User = require(Constants.MY_APP_MODEL_PATH + '/UserModel');
TaskRel.Task = require(Constants.MY_APP_MODEL_PATH + '/Task.Model');

TaskRel.Task.belongsTo(TaskRel.User, { as: 'UserDetails', foreignKey: 'intUserId' });
TaskRel.User.hasMany(TaskRel.Task, { as: 'arTaskDetails', foreignKey: 'intUserId', allowNull: false });



module.exports = TaskRel;