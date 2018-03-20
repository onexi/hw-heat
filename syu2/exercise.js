var exercise = {};

exercise.countRecords = function(data){
    return data.length;
    return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    var index = chicago.meta.view.columns.findIndex( a => a.name == "District" );
    var type = data.filter( a => a[index] == district );
    //var district18 = chicago.data.filter( a => a[19] == district );
    return type.length;
//--------------------------------------------------------
    // var b = 0;
    // for (var i = 0; i < chicago.data.length; i++){
    //     if(data[i][19] == "018"){
    //         b = b+1;
    //     }
    // }
    // return b
//--------------------------------------------------------
    return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    var index = chicago.meta.view.columns.findIndex( a => a.name == "Primary Type" );
    var type = data.filter(a => a[index] == primaryType)
    return type.length
    return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    var index = chicago.meta.view.columns.findIndex( a => a.name == "Location Description" );
    var type = data.filter(a => a[index] == location)
    return type.length
    return 'Error: countLocation not implemented';
};


exercise.buildLatLngPoint = function(crime){
    //lon:28, lat:26
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
  
    return 'Error: buildLatLngPoint not implemented';
};




