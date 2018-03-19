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

    var crimes=0;
data.forEach(function(element){

    if (element[19]==district)
    {
   crimes++;
    }

});
    return crimes; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    data.forEach(function(element){

        if (element[13]==primaryType)
        {
       crimes++;
        }
    
    });
        return crimes; 
    };


exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    data.forEach(function(element){

        if (element[15]==location)
        {
       crimes++;
        }
    
    });
        return crimes; 
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




