var exercise = {};

exercise.countRecords = function (data) {
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return data.length;
};

exercise.countDistrictCrimes = function (data, district) {
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var res = 0;
    data.forEach(element => {
        if (element[19] === district) {
            res += 1;
        };
    });
    return res;
};

exercise.countPrimaryType = function (data, primaryType) {
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    var res = 0;
    data.forEach(element => {
        if (element[13] === primaryType) {
            res += 1;
        };
    });
    return res;
};

exercise.countLocation = function (data, location) {
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------

    var res = 0;
    data.forEach(element => {
        if (element[15] === location) {
            res += 1;
        };
    });
    return res;
};


exercise.buildLatLngPoint = function (crime) {
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------
    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
};




