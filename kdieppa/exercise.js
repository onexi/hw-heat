var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    var num = data.length;
    return num; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var matching;
    matching = data.filter((element) => {
        var comp = (element[19] === district);
        return comp
    })
    return matching.length; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given primary type
    //-------------------------------------------
    var matching;
    matching = data.filter((element) => {
        var comp = (element[13] === primaryType);
        return comp
    });
    return matching.length;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var matching;
    matching = data.filter((element) => {
        var comp = (element[15] === location);
        return comp
    });
                                                        
    return matching.length;
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
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




