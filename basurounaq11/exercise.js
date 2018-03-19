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

    var numCrimes = 0;

    function addCrimes(crimes){
        var crimeDistrict = Number(crimes[19]);
        if (crimeDistrict == district){
            numCrimes++;
        }
    }

    data.forEach(addCrimes);
    return numCrimes; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    
    var numCrimes = 0;

    function addCrimes(crimes){
        var crimePrimaryType = Number(crimes[13]);
        if (crimePrimaryType == primaryType){
            numCrimes++;
        }
    }

    data.forEach(addCrimes);
    return numCrimes; 
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------

    var numCrimes = 0;

    function addCrimes(crimes){
        var crimeLocation = Number(crimes[15]);
        if (crimeLocation == location){
            numCrimes++;
        }
    }

    data.forEach(addCrimes);
    return numCrimes; 
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




