var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    var counter = 0; 
    data.forEach(function(data, district){
        if(district===data[19]){counter+= 1;};
    }); 
    return counter; 
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    //coun thte number of crimes in a specific distrunct, distric 18 in this case 
    // for the given district
    //-------------------------------------------

};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    //
    var counter = 0; 
    data.forEach(function(data,primaryType ){
        if(primaryType===data[13]){counter+= 1;};
    }); 
    return counter;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var counter = 0; 
    data.forEach(function(data, location){
        if((location === "STREET")&&("ST" in data[11]){counter+= 1;};
    }); 
    return counter;
};

exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
    //-------------------------------------------    
   
};




