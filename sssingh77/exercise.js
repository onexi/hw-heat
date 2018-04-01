var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    var output = data.length;
    return output; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    function isDistrict(element){
        var comparison = element[19] === district;
        return comparison;
    }
    var no_of_crimes_district = data.filter(isDistrict);
    return no_of_crimes_district.length; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    function isType(element){
        var comparison = element[13] === primaryType;
        return comparison;
    }
    var no_of_crimes_type = data.filter(isType);
    return no_of_crimes_type.length; 
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    function isLocation(element){
        var comparison = element[15] === location;
        return comparison;
    }
    var no_of_crimes_location = data.filter(isLocation);
    return no_of_crimes_location.length; 
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




