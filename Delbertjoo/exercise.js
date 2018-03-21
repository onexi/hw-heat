var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return "total number of records: " + data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    // district is chicago.data[19]

    var crimes = 0;
    data.forEach(
        function(index){
        if(index[19] === district){
            crimes += 1;
        }
    });
    
    return "number of district 018 crimes: " + (crimes); 

};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    // primary type is [13]

    var crimes = 0;
    data.forEach(
        function(index){
        if(index[13] === primaryType){
            crimes += 1;
        }
    });

    return 'number of primary type crime THEFT: ' + (crimes);
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var crimes = 0;
    data.forEach(
        function(index){
        if(index[15] === location){
            crimes += 1;
        }
    });

    return 'number of crimes in STREET: ' + (crimes);
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




