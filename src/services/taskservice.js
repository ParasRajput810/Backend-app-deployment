const Taskrepository = require("../repository/task");

class taskservice{
    constructor(){
        this.Taskrepo = new Taskrepository();
    }

    async createservice(data){
        try {
            const response = await this.Taskrepo.createtask(data)
           
            return response
        } catch (error) {
            throw error;
        }
    }
    async gettaskservice(){
        try {
            const response = await this.Taskrepo.gettasks();
            return response
        } catch (error) {
            throw error;
        }
    }
    
    async deletetaskservice(id){
        try {
            const response = await this.Taskrepo.deletetask(id);
            return response
        } catch (error) {
            throw error;
        }
    }
}

module.exports = taskservice;