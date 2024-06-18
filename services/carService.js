class CarService {
    constructor(carDAL) {
        this.carDAL = carDAL;
    }

    async getAllCars(userId) {
        return this.carDAL.getAll(userId);
    }

    async getCarById(userId, carId) {
        return this.carDAL.getById(userId, carId);
    }

    async createCar(userId, carData) {
        const { model, manufacturer, year } = carData;
        if (!model || !manufacturer || typeof year === 'undefined') {
            throw new Error('Необходимо указать модель, производителя и год выпуска');
        }

        if (typeof model !== 'string' || typeof manufacturer !== 'string') {
            throw new Error('Модель и производитель должны быть строкой');
        }

        if (typeof year !== 'number' || year <= 0) {
            throw new Error('Год выпуска должен быть положительным числом');
        }

        return this.carDAL.create(userId, carData);
    }

    async updateCar(userId, carId, carData) {
        const { model, manufacturer, year } = carData;

        if (model && typeof model !== 'string') {
            throw new Error('Модель должна быть строкой');
        }

        if (manufacturer && typeof manufacturer !== 'string') {
            throw new Error('Производитель должен быть строкой');
        }

        if (typeof year !== 'undefined' && (typeof year !== 'number' || year <= 0)) {
            throw new Error('Год выпуска должен быть положительным числом');
        }

        return this.carDAL.update(userId, carId, carData);
    }

    async deleteCar(userId, carId) {
        return this.carDAL.delete(userId, carId);
    }
}

module.exports = CarService;
