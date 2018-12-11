const fs = require('fs');
const path = require('path');

const getDirs = dir =>
    fs
        .readdirSync(dir)
        .filter(child => fs.statSync(path.join(dir, child)).isDirectory());

const getFiles = dir =>
    fs
        .readdirSync(dir)
        .filter(child => fs.statSync(path.join(dir, child)).isFile())

module.exports = {
    getDirs,
    getFiles
};
