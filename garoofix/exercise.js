var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return data.length;
    return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var result = data.filter(function(d){return d[19] === district});
    return result.length;
    return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    
    var result = data.filter(function(d){return d[13] === primaryType});
    return result.length;
    return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //------------------------------------------- 29
    var result = data.filter(function(d){return d[29] === location});
    return result.length;
    return 'Error: countLocation not implemented';
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
    var point = {
        latitude: crime[26],
        longitude: crime[28]
    }
    return point;
    return 'Error: buildLatLngPoint not implemented';
};




