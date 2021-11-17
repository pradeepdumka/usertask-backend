
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const repository=require(Constants.MY_APP_REPOSITORYT_PATH+'/User.Repository');
 
const ApiHelper=require(Constants.MY_APP_HELPERS_PATH+'/AppApi.Helpers');

  const UserController = () => {
     const addUser = async(req, res) => {
        let arShareObj=req;
       // ApiHelper.addDeveloperNotes('App Login Ends Points Called!!',arShareObj);
        try{
            let arExcludedKeys = [];
            let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
      
            await repository.addUser(arRequestParams)
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

  

    const getUser = async(req,res)=>{
        try{
            let arExcludedKeys = [];
            let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
            await repository.getUser(arRequestParams)
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

  

    const updateUser = async(req,res)=>{
      try{
          let arExcludedKeys = [];
          let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
          await repository.updateUser(arRequestParams)
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

    const deleteUser = async(req,res)=>{
      try{
          let arExcludedKeys = [];
          let arRequestParams = await ApiHelper.parseRequestParams(req, arExcludedKeys);
          await repository.deleteUser(arRequestParams)
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
      addUser,
      getUser,
      updateUser,
      deleteUser
    };
  };

  module.exports = UserController;