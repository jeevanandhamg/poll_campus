const express = require('express');
const app = express();
const routes = require('../src/routes/route');
const dbConnection = require('../src/database/dbConnection');

const startServer = async() => {
app.use(express.json());

// Apply middleware
// app.use(require('./src/middleware/authMiddleware'));

// Define routes
app.use('/api', routes);
 await dbConnection();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}
startServer();
