// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName
};

const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName)
};

const createProtoMagicObject = () => {
    return Function;
};

let sum = 0;
const incrementor = () => {
    let inner = function () {
        sum++;
        return inner;
    }
    inner.valueOf = function () {
        sum++;
        return sum;
    };
    return inner;
}

let sumAsync = 0;
const asyncIncrementor = () => {
    return new Promise(function (resolve, reject) {
        resolve(++sumAsync);
    })
};

const createIncrementer = () => {
    let sumArr = [1];
    let inc = sumArr;
    inc.next = function () {
        sumArr[0]++;
        return { 'value': sumArr[0] - 1 };
    }
    return inc;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(param);
        }, 1100);
    })
};

const getDeepPropertiesCount = (obj) => {
    let count = 0;
    let counter = function (tempObj) {
        let keysArr = Object.keys(tempObj)
        count = count + keysArr.length;
        keysArr.forEach(function (element) {
            if (typeof tempObj[element] === 'object') {
                counter(tempObj[element]);
            }
        })
    }
    counter(obj);
    return count;
};

const createSerializedObject = () => {
    return null
};
const toBuffer = () => { };

const sortByProto = (obj) => {
    return obj.sort(function (a, b) {
        return b - a;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;