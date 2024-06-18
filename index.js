const express = require('express');
const { UserDAL } = require('./reposio/UserDAL'); 
const UserService = require('./services/UserService'); 
const UserController = require('./controllers/UserController');
const createUserRoutes = require('./routes/userRoutes');
const CarDAL = require('./reposio/CarDAL');
const CarService = require('./services/carService'); 
const CarController = require('./controllers/CarController');
const createCarRoutes = require('./routes/carRoutes');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const app = express();
const port = 3000;

const userService = new UserService(UserDAL);
const userController = new UserController(userService);
const userRoutes = createUserRoutes(userController);

const carService = new CarService(CarDAL);
const carController = new CarController(carService);
const carRoutes = createCarRoutes(carController);

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Documentation',
            description: 'Description of my API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/carRoutes.js', './routes/userRoutes.js'], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', carRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
