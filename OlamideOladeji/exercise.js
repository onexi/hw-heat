var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return data.length
    //return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var countCrimes = 0;

    data.forEach(function(incident) {
        var distr = parseInt(incident[19]);
        if (distr === parseInt(district)) {
            countCrimes += 1;
        }
      });

    return countCrimes
    //return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    var countCrimesPrimary = 0;

    data.forEach(function(incident) {
        var offense = incident[13];
        if (offense === primaryType) {
            countCrimesPrimary += 1;
        }
      });

    return countCrimesPrimary
    //return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var countCrimesLoc = 0;

    data.forEach(function(incident) {
        var loc = incident[15];
        if (loc === location) {
            countCrimesLoc += 1;
        }
      });

    return countCrimesLoc
    //return 'Error: countLocation not implemented';
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
    //return 'Error: buildLatLngPoint not implemented';
};




