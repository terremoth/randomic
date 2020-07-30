const Randomic = {};

Randomic.int = function(min ,max) {
    min = min || 0;
    max = max || 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Randomic.float = function(min, max) {
    min = min || 0;
    max = max || 0;
    return Math.random() * (max - min) + min;
};
Randomic.range = function(start, end, step) {
    start = start || 0;
    end   = end   || 10;

    var randomArr = [];
    if (typeof start === 'number') {
        randomArr[0]= start;
        step = step || 1;
        while (start + step <= end) {
            randomArr[randomArr.length]= start+= step;
        }
    } else {
        var str = 'abcdefghijklmnopqrstuvwxyz'; 
        if(start === start.toUpperCase()) {
            end = end.toUpperCase();
            str = str.toUpperCase();
        }

        str = str.substring(str.indexOf(start), str.indexOf(end)+ 1);
        randomArr = str.split('');        
    }
    return randomArr;
};
Randomic.string = function(len) {
    len = len || 10;
    var rdmString = "";
    for( ; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
};
Randomic.arrayInt = function(minSize, maxSize, minInt, maxInt) {
    minSize = minSize || 5;
    maxSize = maxSize || 10;

    minInt = minInt || 0;
    maxInt = maxInt || 100;

    var arr = [], i;
    var randomSize = Randomic.int(minSize, maxSize);

    for(i = 0; i < randomSize; i++) {
        arr.push(Randomic.int(minInt, maxInt));
    }
    return arr;
};
Randomic.dice = function(maxSize) {
    maxSize = maxSize || 6;
    return Randomic.int(1, maxSize);
};
