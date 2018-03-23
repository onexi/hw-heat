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
    function findDistrict(element){
        var foundDistrict = element[19] === district;
        return foundDistrict;
    };
    var filteredByDistrict = data.filter(findDistrict);
    return filteredByDistrict.length; 
    // console.log(JSON.stringify(filteredByDistrict));
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    function findType(element){
        var foundType = element[13] === primaryType;
        return foundType;
    };
    var filteredByType = data.filter(findType);
    return filteredByType.length; 
    // console.log(JSON.stringify(filteredByType));
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    function findLocation(element){
        var foundLocation = element[15] === location;
        return foundLocation;
    };
    var filteredByLocation = data.filter(findLocation);
    return filteredByLocation.length; 
    // console.log(JSON.stringify(filteredByLocation));
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
    point.latitude = crime[29][1];
    point.longitude = crime[29][2];
    return point;  
};