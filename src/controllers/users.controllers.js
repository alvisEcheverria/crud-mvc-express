const UsersServices = require('../services/users.services')

const getAllUsers = async (req, res) =>{
    try {
          const users = await UsersServices.getAll();   
          res.send(users)  
    } catch (error) {
        console.log(error)
    }
}

const createUsers = async (req, res) =>{
    try {
        const newUser = req.body;
        const users = await UsersServices.create(newUser);
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

const updateUsers = async (req, res) =>{
    try {
        const { id } = req.params;
        const updateUser = req.body;
        const result = await UsersServices.update(updateUser, id);
        res.json(result);     
    } catch (error) {
        console.log(error)
    }
}

const deleteUsers = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await UsersServices.delete(id);
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
                    getAllUsers,
                    createUsers,
                    updateUsers,
                    deleteUsers
                }