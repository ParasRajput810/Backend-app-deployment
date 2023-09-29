const {Task} = require("../models/index");

class Taskrepository{
    async createtask(data){
        try {
            const response = await Task.create(data);
            return response
        } catch (error) {
            throw error;
        }
        
    }

    async gettasks(){
        try {
            const response = await Task.findAll();
            return response
        } catch (error) {
            throw error;
        }
    }

    async deletetask(id){
        try {
            const response = await Task.destroy({
                where:{
                    id
                }
            })
            return "success";
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Taskrepository;