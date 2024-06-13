const express = require('express');

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Создать нового пользователя
 *     description: Создает нового пользователя на основе предоставленных данных.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: Пользователь успешно создан.
 *       400:
 *         description: Некорректные данные запроса.
 *   get:
 *     summary: Получить всех пользователей
 *     description: Получает список всех пользователей.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Список пользователей успешно получен.
 *       500:
 *         description: Внутренняя ошибка сервера.
 *
 * /api/users/{id}:
 *   get:
 *     summary: Получить пользователя по ID
 *     description: Получает информацию о пользователе по его уникальному идентификатору.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Информация о пользователе успешно получена.
 *       404:
 *         description: Пользователь с указанным ID не найден.
 *       500:
 *         description: Проблемы с сервером.
 *
 *   put:
 *     summary: Обновить информацию о пользователе
 *     description: Обновляет информацию о пользователе на основе предоставленных данных.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: Информация о пользователе успешно обновлена.
 *       404:
 *         description: Пользователь с указанным ID не найден.
 *       500:
 *         description: Проблемы с сервером.
 *
 *   delete:
 *     summary: Удалить пользователя
 *     description: Удаляет пользователя по его уникальному идентификатору.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID пользователя
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Пользователь успешно удален.
 *       404:
 *         description: Пользователь с указанным ID не найден.
 *       500:
 *         description: Проблемы сервера.
 */


module.exports = (userController) => {
    const router = express.Router();

    router.get('/users', userController.getAllUsers);
    router.get('/users/:id', userController.getUserById);
    router.post('/users', userController.createUser);
    router.put('/users/:id', userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);

    return router;
};


