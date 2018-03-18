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
    const result = data.filter(crime => crime[12] === district);
    console.log(result.length);
    return result.length;
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    const result = data.filter(crime => crime[6] === primaryType);
    console.log(result.length);
    return result.length;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    const result = data.filter(crime => crime[22] === location);
    console.log(result.length);
    return result.length;
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // build the point for the given crime
    //-------------------------------------------
    var point = {};    
    point.latitude = crime[19];
    point.longitude = crime[21];
    return point; 
};




