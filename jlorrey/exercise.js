var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return chicago.data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    //for each record i
    //check if chicago[i][19]==district
    //if so, increment
    var count = 0;
    chicago.data.forEach(function(crime) {
        if (crime[19] == district) {
            count+=1;
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
    //var count=0
    //for crimeType in each record[i][13]:
    //if crimeType==primaryType: count+=1
    //return count
    var count = 0;
    chicago.data.forEach(function(crime) {
        if (crime[13] == primaryType) {
            count+=1;
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
    //var count=0
    //for crime in each record[i][29]:
    //if crimeLoc==location: count+=0
    //return count
    var count = 0;
    chicago.data.forEach(function(crime) {
        if (crime[29] == location) {
            count+=1;
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
    point.latitude = crime[26]
    point.longitude = crime[28]
    return point;
    //return 'Error: buildLatLngPoint not implemented';
};




