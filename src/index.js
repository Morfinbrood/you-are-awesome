// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName
};

const createNotEnumerableProperty = (propertyName) => {
    return propertyName
};
const createProtoMagicObject = () => {
    return this;
};

let sum = 0;
const incrementor = () => {
    let inner = function () {
        sum++;
        return inner;
    }
    inner.valueOf = function () {
        return ++sum;
    };
    return inner;
}

const asyncIncrementor = () => { };
const createIncrementer = () => { };

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