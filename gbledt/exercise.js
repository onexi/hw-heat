var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var countDistrictCrimes = 0;
    data.forEach(record => {
        if (record[19] == district) {
            countDistrictCrimes++;
        }
    });
    return countDistrictCrimes; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    var countPrimaryType = 0;
    data.forEach(record => {
        if (record[13] == primaryType) {
            countPrimaryType++;
        }
    });
    return countPrimaryType;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var countLocation = 0;
    data.forEach(record => {
        if (record[15] == location) {
            countLocation++;
        }
    });
    return countLocation;
};


exercise.buildLatLngPoint = function(crime){
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




