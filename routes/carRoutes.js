const express = require('express');

module.exports = (carController) => {
    const router = express.Router();

    router.get('/users/:userId/cars', carController.getAllCars);
    router.get('/users/:userId/cars/:carId', carController.getCarById);
    router.post('/users/:userId/cars', carController.createCar);
    router.put('/users/:userId/cars/:carId', carController.updateCar);
    router.delete('/users/:userId/cars/:carId', carController.deleteCar);

    return router;
};
