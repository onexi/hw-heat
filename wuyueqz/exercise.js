var exercise = {};

exercise.countRecords = function(data){
    var records = data.length
    return records;
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    //return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    var crimes = data.filter(x => x[19] === district).length;
    return crimes; 
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    //return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    var thefts = data.filter(x => x[13] === primaryType).length;
    return thefts;
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    //return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    var locations = data.filter(x => x[15] === location).length;
    return locations;
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    //return 'Error: countLocation not implemented';
};


exercise.buildLatLngPoint = function(crime){
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
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
    //return 'Error: buildLatLngPoint not implemented';
};




