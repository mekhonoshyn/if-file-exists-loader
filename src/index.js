import loaderUtils from 'loader-utils';
import {transformSource} from './helper';

const IS_RAW = true;

export {
    ifFileExistsLoader as default,
    IS_RAW as raw
};

function ifFileExistsLoader() {
    this.cacheable();

    const callback = this.async();
    const {filePath} = loaderUtils.getOptions(this);

    transformSource(filePath, callback);
}
