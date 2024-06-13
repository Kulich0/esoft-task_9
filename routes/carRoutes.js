const express = require('express');

/**
 * @swagger
 * /api/users/{userId}/cars:
 *   get:
 *     summary: Получить все машины пользователя
 *     description: Получает список всех машин, принадлежащих определенному пользователю.
 *     tags:
 *       - Cars
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Список машин успешно получен.
 *       404:
 *         description: Пользователь с указанным ID не найден.
 *
 * /api/users/{userId}/cars/{carId}:
 *   get:
 *     summary: Получить информацию о машине
 *     description: Получает информацию о машине по ее уникальному идентификатору и ID пользователя.
 *     tags:
 *       - Cars
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *       - in: path
 *         name: carId
 *         required: true
 *         description: ID машины
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Информация о машине успешно получена.
 *       404:
 *         description: Машина с указанным ID не найдена.
 *
 *   post:
 *     summary: Создать новую машину
 *     description: Создает новую машину для определенного пользователя на основе предоставленных данных.
 *     tags:
 *       - Cars
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: number
 *     responses:
 *       200:
 *         description: Машина успешно создана.
 *       400:
 *         description: Некорректные данные запроса.
 *
 *   put:
 *     summary: Обновить информацию о машине
 *     description: Обновляет информацию о машине на основе предоставленных данных и ID пользователя.
 *     tags:
 *       - Cars
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *       - in: path
 *         name: carId
 *         required: true
 *         description: ID машины
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: number
 *     responses:
 *       200:
 *         description: Информация о машине успешно обновлена.
 *       400:
 *         description: Некорректные данные запроса.
 *       404:
 *         description: Машина с указанным ID не найдена.
 *
 *   delete:
 *     summary: Удалить машину
 *     description: Удаляет машину по ее уникальному идентификатору и ID пользователя.
 *     tags:
 *       - Cars
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *       - in: path
 *         name: carId
 *         required: true
 *         description: ID машины
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Машина успешно удалена.
 *       404:
 *         description: Машина с указанным ID не найдена.
 */


module.exports = (carController) => {
    const router = express.Router();

    router.get('/users/:userId/cars', carController.getAllCars);
    router.get('/users/:userId/cars/:carId', carController.getCarById);
    router.post('/users/:userId/cars', carController.createCar);
    router.put('/users/:userId/cars/:carId', carController.updateCar);
    router.delete('/users/:userId/cars/:carId', carController.deleteCar);

    return router;
};
