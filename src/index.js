import co from 'co';
import isArray from 'isarray';

const serialExecutor = co.wrap(function* (promises) {
    if (!isArray(promises)) {
        throw new Error('invalid argument');
    }
    
    var result = [];
    for (const data of promises) {
        const p = data.promise;
        const args = data.args;
        const r = yield p(...args);
        result.push(r);
    }

    return result;
});

export default serialExecutor;

