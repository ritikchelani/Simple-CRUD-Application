const app = require('./app')
require('dotenv').config()


const connectDatabase = require('./config/database');


connectDatabase();
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})





const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`)
})


process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})