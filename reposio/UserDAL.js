let users = [
    { 
        id: 1, 
        name: 'Андрей Самар', 
        email: 'samarandrei@yandex.com', 
        age: 19, 
        cars: [
            {id: 1, model: 'Accord', manufacturer: 'Honda', year: 2007}
        ] 
    },
    { 
        id: 2, 
        name: 'Степан Дубровин', 
        email: 'stepan.09myromec@gmail.com', 
        age: 19, 
        cars: [
            {id: 2, model: 'Mark 2', manufacturer: 'Toyota', year: 1993}
        ] 
    },
];


class UserDAL {
    async create(userData) {
        const newUser = { id: users.length + 1, ...userData };
        users.push(newUser);
        return newUser;
    }

    async getAll() {
        return users;
    }

    async getById(id) {
        return users.find(user => user.id === id);
    }

    async update(id, updateUser) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updateUser };
            return users[index];
        }
        return null;
    }

    async delete(id) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = {UserDAL: new UserDAL(), users};


