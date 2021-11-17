
const routes = {
    'POST /addTasks':{
      path: 'TaskController.addNewTask'
    } ,
    'GET /getAllTask':{
      path: 'TaskController.getAllTask'
    },
    'PUT /updateTask':{
      path:  'TaskController.updateTask'
    } ,
    'POST /deleteTask':{
      path:  'TaskController.deleteTask'
    } ,

    
    'POST /addUser':{
      path: 'UserController.addUser'
    } ,
    'GET /getUser':{
      path:  'UserController.getUser'
    },
    'PUT /updateUser':{
      path:  'UserController.updateUser'
    } ,
    'POST /deleteUser':{
      path:  'UserController.deleteUser'
    } ,

  
    

  };
   
  module.exports = routes;