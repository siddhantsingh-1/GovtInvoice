require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createFile } = require('./controllers/files')

const app = express();
app.use(cors());
app.use(express.json());
const connectDB = require('./db/connect')

const filesRouter = express.Router();
filesRouter.route('/').post(createFile);
app.use('/api/v1/files', filesRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) { 
    console.log(error);
  }
};

start();