const { users } = require('./UserDAL');

class CarDAL {
    
    async getAll(userId) {
        const user = users.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        return user.cars || [];
    }

    async getById(userId, carId) {
        const user = users.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        return user.cars.find(car => car.id === parseInt(carId));
    }

    async create(userId, carData) {
        const user = users.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const newCarId = user.cars.length ? user.cars[user.cars.length - 1].id + 1 : 1;
        const newCar = { id: newCarId, ...carData };
        user.cars.push(newCar);
        return newCar;
    }

    async update(userId, carId, carData) {
        const user = users.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const carIndex = user.cars.findIndex(car => car.id === parseInt(carId));
        if (carIndex !== -1) {
            user.cars[carIndex] = { ...user.cars[carIndex], ...carData };
            return user.cars[carIndex];
        }
        return null;
    }

    async delete(userId, carId) {
        const user = users.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const carIndex = user.cars.findIndex(car => car.id === parseInt(carId));
        if (carIndex !== -1) {
            user.cars.splice(carIndex, 1);
            return true;
        }
        return false;
    }
}

module.exports = new CarDAL();


