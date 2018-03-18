var exercise = {};

exercise.countRecords = function(data){
    var totalNumber = data.length;
    return totalNumber;
};

exercise.countDistrictCrimes = function(data,district){
    var districtNumber = data.filter(x => x[19] === district).length;
    return districtNumber;
};

exercise.countPrimaryType = function(data,primaryType){
    var typeNumber = data.filter(x => x[13] === primaryType).length;
    return typeNumber;
};

exercise.countLocation = function(data,location){
    var locationNumber = data.filter(x => x[15] === location).length;
    return locationNumber;
};


exercise.buildLatLngPoint = function(crime){  
    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
};




