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
   
   // looks like it's in data[19]
    var districtCrimes = data.filter((curr, index, all) => {
        if(curr[19] == district){
            return curr;
        }
    });
    

    return districtCrimes.length; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
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
    return 'Error: buildLatLngPoint not implemented';
};




