import assert from 'power-assert';
import serialExecutor from '../src/';

function p1(i) {
    return new Promise((resolve, reject) => {
        resolve(i);
    });
}

function p2(i) {
    return new Promise((resolve, reject) => {
        reject(false);
    });
}

describe("SerialExecutor's Test", () => {

    it("serialexecute promise objects", () => {
        const promises = [
            {
                promise: p1,
                args:    [1]
            },
            {
                promise: p1,
                args:    [2]
            }
        ];
        serialExecutor(promises)
        .then((r) => {
            assert.deepEqual(r, [1,2]);
        });
    });

    it("serialexecute promise objects reject", () => {
        const promises = [
            {
                promise: p2,
                args:    [1]
            },
            {
                promise: p1,
                args:    [2]
            }
        ];
        serialExecutor(promises)
        .then((r) => {
        })
        .catch((e) => {
            assert.equal(e, false);
        });
    });

});
