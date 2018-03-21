var exercise = {};

exercise.countRecords = function(data){

    records = data.length;
    return records; 
};



exercise.countDistrictCrimes = function(data, district){
    
    var matching = data.filter(function(report){
        return report[19] == district;
    });

    var crimes = {};
    crimes.district = district;
    crimes.reports = matching.length;


    return crimes;
     
};


exercise.countPrimaryType = function(data,primaryType){

    var matching = data.filter(function(report){
        return report[13] == primaryType;
    });

    var types = {};
    types.type = primaryType;
    types.reports = matching.length;

    return types;

};

exercise.countLocation = function(data,location){

    var matching = data.filter(function(report){
        return report[15] == location;
    });

    var locations = {};
    locations.location = location;
    locations.reports = matching.length;

    return locations;

};


exercise.buildLatLngPoint = function(crime){

    var point = {};

    point.latitude = crime[26];
    point.longitude = crime[28];

    return point
    
    var points = chicago.data.map(point);
       

};




