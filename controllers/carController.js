class CarController {
    constructor(carService) {
        this.carService = carService;
    }

    getAllCars = async (req, res) => {
        try {
            const cars = await this.carService.getAllCars(req.params.userId);
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    getCarById = async (req, res) => {
        try {
            const car = await this.carService.getCarById(req.params.userId, req.params.carId);
            if (car) {
                res.status(200).json(car);
            } else {
                res.status(404).send('Машина не найдена');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    createCar = async (req, res) => {
        try {
            const newCar = await this.carService.createCar(req.params.userId, req.body);
            res.status(201).json(newCar);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    updateCar = async (req, res) => {
        try {
            const updatedCar = await this.carService.updateCar(req.params.userId, req.params.carId, req.body);
            if (updatedCar) {
                res.status(200).json(updatedCar);
            } else {
                res.status(404).send('Машина не найдена');
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    deleteCar = async (req, res) => {
        try {
            const deleted = await this.carService.deleteCar(req.params.userId, req.params.carId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send('Машина не найдена');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
}

module.exports = CarController;

