const File = require('../models/File');
const {StatusCodes} = require('http-status-codes');

const createFile = async (req, res) => {
    console.log("Here is the request body: ")
    console.log(req.body);
    const file = await File.create(req.body);
    res.status(StatusCodes.CREATED).json(file);
}

module.exports = {
    createFile
}