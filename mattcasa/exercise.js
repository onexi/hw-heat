var exercise = {};

exercise.countRecords = function(data){

    return data.length; 

    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    
};

exercise.countDistrictCrimes = function(data,district){

    var counter = 0;
    data.forEach((item, index) => {
        if(item[19]===district){
            counter++;
        }
    });

    return counter;

    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
};

exercise.countPrimaryType = function(data,primaryType){

    var counter = 0;
    data.forEach((item, index) => {
        if(item[13]===primaryType){
            counter++;
        }
    });

    return counter;

    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
};

exercise.countLocation = function(data,location){

    var counter = 0;
    data.forEach((item, index) => {
        if(item[15]===location){
            counter++;
        }
    });

    return counter;

    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
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
};




