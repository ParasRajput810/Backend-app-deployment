const taskservice = require('../services/taskservice');

const taskcontroller = new taskservice();

const create = async(req,res)=>{
    try {
        console.log(req)
        const response = await taskcontroller.Taskrepo.createtask(req.body);
        
        return res.status(201).json({
            body: response,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
        
    }
}
const gettasks = async(req,res)=>{
    try {
        const response = await taskcontroller.Taskrepo.gettasks();
        return res.status(201).json({
            body: response,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
        
    }
}

const deltask = async(req,res)=>{
    const {id} = req.params;
    try {
        const response = await taskcontroller.Taskrepo.deletetask(id);
        return res.status(201).json({
            body: response,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
    } 
}

module.exports = {
    create,
    gettasks,
    deltask
}