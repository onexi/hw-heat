var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    var totalRecords = data.length;
    return totalRecords; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    
    var totalDistrictCrimes = 0; 
    for (i=0; i<data.length; i++){
        if (data[i][19]==district) {
            totalDistrictCrimes ++;
        }
    }
    return totalDistrictCrimes; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------

    var totalPrimaryType = 0;
    for (i=0; i<data.length; i++){
        if (data[i][13]==primaryType){
            totalPrimaryType ++;
        }
    }
    return totalPrimaryType;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------

    var totalLocation = 0;
    for (i=0; i<data.length; i++){
        if (data[i][15]==location){
            totalLocation ++;
        }
    }
    return totalLocation;
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

// [26]latitude [28]longitude


