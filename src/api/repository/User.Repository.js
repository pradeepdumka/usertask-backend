
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const TaskRel= require(Constants.MY_APP_MODEL_PATH + '/TaskRel');



exports.addUser=(arParams)=>{
    return new Promise(function(resolve, reject) { 
        //arParams.dtCreated = UserModel.sequelize.fn('NOW'); 
        console.log(arParams);
        let obj = { ...arParams };
        console.log(obj);
        TaskRel.User.create(obj)
        .then((result) => {    
            resolve(result.id); 
        })
        .catch(function(error) {
            reject(error);
        });  
    });
}

exports.getUser=()=>{
    return new Promise(function(resolve, reject) { 
        TaskRel.User.findAll(
            {
                include:[
                    {
                        model:TaskRel.Task,
                        as:"arTaskDetails",
                        required: false
                    }
                ]
            }
        )
        .then((result) => {    
            resolve(result); 
        })
        .catch(function(error) {
            reject(error);
        });  
    });
}


exports.updateUser=(arParams)=>{
    return new Promise(function(resolve, reject) {
            
        let obj={ ...arParams};
        let arConditions={id:obj.id};
        TaskRel.User.update(obj, {
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


exports.deleteUser=(arParams)=>{
    return new Promise(function(resolve, reject) {
            
        let obj={ ...arParams};
        let arConditions={id:obj.id};
        TaskRel.Task.findAll({where:{intUserId:obj.id}})
        .then((result) => {    
          if(result.length > 0){
                      TaskRel.Task.destroy({
                            where : {intUserId:obj.id}
                            
                        })
                        .then((result) => {
                            console.log(result);    
                            //resolve(result);
                              if(result) {
                                TaskRel.User.destroy({
                                    where : arConditions
                                    
                                })
                                .then((res)=>{
                                    resolve(res);
                                })
                                .catch((error)=>{
                                    reject(error); 
                                })
                            }
                        })
                        .catch(function(error) {
                            reject(error);
                        }); 
          }else{
                TaskRel.User.destroy({
                    where : arConditions
                    
                })
                .then((res)=>{
                    resolve(res);
                })
                .catch((error)=>{
                    reject(error); 
                })
          }
        })
        .catch(function(error) {
            reject(error);
        }); 
  
        
    });
}


 