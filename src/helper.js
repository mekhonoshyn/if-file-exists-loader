import fs from 'fs';

export {transformSource};

function transformSource(filePath, callback) {
    fs.readFile(filePath, (error, content = '') => callback(null, content));
}
