var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    var numRecords = data.length;
    return numRecords; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    //data[19] should be District column
    var count = 0;
    
    data.forEach(el => {
        if (el[19] === district){
            count++;
        }        
    });

    return count; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    //primary type is data[13]
    var count = 0;
    data.forEach( el =>{
        if (el[13]===primaryType){
            count++;
        }
    });
    return count;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var count =0;
    data.forEach(el => {
        if(el[15]===location){
            count++;
        }
    });
    return count;
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




