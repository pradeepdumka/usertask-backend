
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const repository=require(Constants.MY_APP_REPOSITORYT_PATH+'/Task.Repository');
const ApiHelper=require(Constants.MY_APP_HELPERS_PATH+'/AppApi.Helpers');

  const TaskController = () => {
     const addNewTask = async(req, res) => {
        let arShareObj=req;
       // ApiHelper.addDeveloperNotes('App Login Ends Points Called!!',arShareObj);
        try{
            let arExcludedKeys = [];
            let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
      
            await repository.addNewTask(arRequestParams)
            .then(resData=>
                 res.json(
                   {status:200,data:"Data Insert Into Database!"}
                 )
              )
            .catch(err=> res.json(
                 {status:0,data:"Something goes Rong!"}
              )
            );
            
            
        }catch{

        }
     
     };

  

    const getAllTask = async(req,res)=>{
        try{
            let arExcludedKeys = [];
            let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
            await repository.getAllTask(arRequestParams)
            .then(users=>
              res.json(
                    {
                      status:200,
                      data:users,
                    })
             )
            .catch(err=>console.log(err));

        }catch{

        }
    };

  

    const updateTask = async(req,res)=>{
      try{
          let arExcludedKeys = [];
          let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
          await repository.updateTask(arRequestParams)
          .then(users=>
            res.json(
                  {
                    status:200,
                    data:users,
                  })
           )
          .catch(err=>console.log(err));

      }catch{

      }
    };

    const deleteTask = async(req,res)=>{
      try{
          let arExcludedKeys = [];
          let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
          await repository.deleteTask(arRequestParams)
          .then(users=>
            res.json(
                  {
                    status:200,
                    data:users,
                  })
           )
          .catch(err=>console.log(err));

      }catch{

      }
    };

    return {
      addNewTask,
      getAllTask,
      updateTask,
      deleteTask
    };
  };

  module.exports = TaskController;