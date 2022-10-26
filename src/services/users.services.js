const path = require('path');
const fs = require('fs/promises');

const jsonPath = path.resolve('./src/data.json');

class UsersServices {
    static async getAll() {
        try {
            const users = await fs.readFile(jsonPath, 'utf8');
            return users;
        } catch (error) {
            throw(error)
        }
    }

    static async create(newUser){
        try {
            const users = JSON.parse(await fs.readFile(jsonPath, 'utf8'));
            users.push({...newUser, id: users[users.length -1].id +1});
            await fs.writeFile(jsonPath, JSON.stringify(users));
            return [];
        } catch (error) {
            throw(error)
        }
    }

    static async update(updatedUser, id){
        try {
            const users = JSON.parse(await fs.readFile(jsonPath, 'utf8'));
            const index = users.findIndex(user => user.id === Number(id));
            users.splice(index, 1, {...updatedUser, id: id});
            await fs.writeFile(jsonPath, JSON.stringify(users));
        } catch (error) {
            throw(error)
        }
    }

    static async delete(id){
        try {
            const users = JSON.parse(await fs.readFile(jsonPath, 'utf8'));
            const filteredUsers = users.filter(user => user.id !== Number(id))
            await fs.writeFile(jsonPath, JSON.stringify(filteredUsers));
            return [];
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = UsersServices;

