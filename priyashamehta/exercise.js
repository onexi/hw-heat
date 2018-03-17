var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    //return 'Error: countRecords not implemented'; 
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    //return 'Error: countDistrictCrimes not implemented'; 

    var countCrimes = data.filter(function(element){
        return element[19] === district;
    }); 

    return countCrimes.length; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    //return 'Error: countPrimaryType not implemented';

    var countPrimaryType = data.filter(function(element){
        return element[13] === primaryType;
    }); 

    return countPrimaryType.length; 
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    //return 'Error: countLocation not implemented';

    var countLocation = data.filter(function(element){
        return element[15] === location;
    }); 

    return countLocation.length; 
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
    //return 'Error: buildLatLngPoint not implemented';

    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
};




