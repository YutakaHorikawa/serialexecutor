# serialexecutor

# Example
```javascript

import serialExecutor from 'serialexecutor';

function p(i) {
    return new Promise((resolve, reject) => {
        resolve(i);
    });
};

const promises = [
    {
        promise: p,
        args:    [1]
    },
    {
        promise: p,
        args:    [2]
    },
    {
        promise: p,
        args:    [3]
    }
];

serialexecutor(promises)
.then((val) => {
    console.log(val); // [1,2,3]
})
.catch((err) => {
    console.log(err);
});
```
