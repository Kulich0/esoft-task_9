class UserService {
    constructor(UserDAL) {
        this.UserDAL = UserDAL;
    }

    async getAllUsers() {
        return this.UserDAL.getAll();
    }

    async getUserById(id) {
        return this.UserDAL.getById(id);
    }

    async addUser(user) {
        const { name, email, age } = user;
        if (!name || !email || typeof age === 'undefined') {
            throw new Error('Необходимо указать имя, почту, возраст');
        }

        if (typeof name !== 'string' || typeof email !== 'string') {
            throw new Error('Имя и почта должны быть строкой');
        }

        if (typeof age !== 'number' || age <= 0) {
            throw new Error('Возраст должен быть положительным числом');
        }
        return this.UserDAL.create(user);
    }

    async updateUser(id, user) {
        const { name, email, age } = user;

        if (name && typeof name !== 'string') {
            throw new Error('Имя должно быть строкой');
        }

        if (email && typeof email !== 'string') {
            throw new Error('Почта должна быть строкой');
        }

        if (typeof age !== 'undefined' && (typeof age !== 'number' || age <= 0)) {
            throw new Error('Возраст должен быть положительным числом');
        }
        return this.UserDAL.update(id, user);
    }

    async deleteUser(id) {
        return this.UserDAL.delete(id);
    }
}

module.exports = UserService;
