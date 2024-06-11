class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
    getUserById = async (req, res) => {
        try {
            const userId = parseInt(req.params.id, 10);
            const user = await this.userService.getUserById(userId);
    
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('Пользователь не найден');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
    createUser = async (req, res) => {
        try {
            const newUser = await this.userService.addUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    updateUser = async (req, res) => {
        try {
            const userId = parseInt(req.params.id, 10);
            const updatedUser = await this.userService.updateUser(userId, req.body);
    
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).send('Пользователь не найден');
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    deleteUser = async (req, res) => {
        try {
            const userId = parseInt(req.params.id, 10);
            const deleted = await this.userService.deleteUser(userId);
    
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send('Пользователь не найден');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = UserController;

