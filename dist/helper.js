'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformSource = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.transformSource = transformSource;


function transformSource(filePath, callback) {
    _fs2.default.readFile(filePath, function (error) {
        var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return callback(null, content);
    });
}