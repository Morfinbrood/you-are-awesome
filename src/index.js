// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName
};

const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName)
};

const createProtoMagicObject = () => {
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
const returnBackInSecond = () => { };
const getDeepPropertiesCount = () => { };
const createSerializedObject = () => { };
const toBuffer = () => { };
const sortByProto = () => { };

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