const express = require('express');
const app = express();
const { sequelize } = require('./models');
const routes = require('./routes/routes');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');

// const path = require('path');

app.use(express.json());
app.use('/api', routes);
app.use(notFoundMiddleware);
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: "Node JS", message: "All Content Message Written Here!" });
});

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`--------Server is running on Port : ${PORT}--------`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = app;
