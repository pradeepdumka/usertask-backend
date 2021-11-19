const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const TaskRel= require(Constants.MY_APP_MODEL_PATH + '/TaskRel');

exports.addNewTask=(arParams)=>{
    return new Promise(function(resolve, reject) { 
        //arParams.dtCreated = UserModel.sequelize.fn('NOW'); 
        let obj = { ...arParams };
        TaskRel.Task.create(obj)
        .then((result) => {    
            resolve(result.id); 
        })
        .catch(function(error) {
            reject(error);
        });  
    });
}

exports.getAllTask=()=>{
    return new Promise(function(resolve, reject) { 
        TaskRel.Task.findAll()
        .then((result) => { 
            console.log(result.length)   
            resolve(result); 
        })
        .catch(function(error) {
            reject(error);
        });  
    });
}


exports.updateTask=(arParams)=>{
    return new Promise(function(resolve, reject) {
            
        let obj={ ...arParams};
        let arConditions={id:obj.id,intUserId:obj.intUserId };
        TaskRel.Task.update(obj, {
            where: arConditions,
          })
        .then((result) => {    
            resolve(result); 
        })
        .catch(function(error) {
            reject(error);
        }); 
        
    });
}


exports.deleteTask=(arParams)=>{
    return new Promise(function(resolve, reject) {
            
        let obj={ ...arParams};

        let arConditions={id:obj.id,intUserId:obj.intUserId};
        TaskRel.Task.destroy({
            where : arConditions
            
        })
        .then((result) => {    
            resolve(result); 
        })
        .catch(function(error) {
            reject(error);
        }); 
        
    });
}


 