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
    return data.filter(element => element[19] === district).length;
};

exercise.countPrimaryType = function (data, primaryType) {
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    return data.filter(element => element[13] === primaryType).length;
};

exercise.countLocation = function (data, location) {
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    return data.filter(element => element[15] === location).length;
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




