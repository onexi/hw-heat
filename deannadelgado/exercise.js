var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    
    return Object.keys(chicago.data).length;

    // Return the total number of records
    //-------------------------------------------
   // return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    var countingDistrict = data.filter(function(report){
        return report[18] == district;
    });

    var crimes = {};
    crimes.district = district;
    crimes.reports = counting.length;

    return crimes;

    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    //return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    var countingPrimary = data.filter(function(report2){
        return report2[18] == primary;
    });

    var crimes = {};
    crimes.primary = primary;
    crimes.reports = countingPrimary.length;

    return crimes;

    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    //return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    var countingLocation = data.filter(function(report3){
        return report3[18] == location;
    });

    var crimes = {};
    crimes.location = location;
    crimes.reports = countingLocation.length;

    return crimes;
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    //return 'Error: countLocation not implemented';
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    //
    var point = {};    
    point.latitude = crime[latitudeColumnNumber];
    point.longitude = crime[longitudeColumnNumber];
    return point;    
    //-------------------------------------------    
    //return 'Error: buildLatLngPoint not implemented';
};




