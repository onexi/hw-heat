var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // Return the total number of records
    //-------------------------------------------
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    const result = data.filter(crime => crime[19] === district);
    return result.length;
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    const result = data.filter(crime => crime[13] === primaryType);
    return result.length;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    const result = data.filter(crime => crime[15] === location);
    return result.length;
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // build the point for the given crime
    //-------------------------------------------
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point; 
};




