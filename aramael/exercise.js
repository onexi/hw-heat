var exercise = {};

exercise.countRecords = function(data){
    return data.length; 
};

exercise.countDistrictCrimes = function(data, district){
    return data.reduce((acc, datum)=>{
        acc += (datum[19] == district) ? 1 : 0;
        return acc;
    }, 0);
};

exercise.countPrimaryType = function(data,primaryType){
    return data.reduce((acc, datum)=>{
        acc += (datum[13] == primaryType) ? 1 : 0;
        return acc;
    }, 0);
};

exercise.countLocation = function(data,location){
    return data.reduce((acc, datum)=>{
        acc += (datum[15] == location) ? 1 : 0;
        return acc;
    }, 0);
};

exercise.buildLatLngPoint = function(crime){
    return {
        latitude: crime[26],
        longitude: crime[28]
    };
};
