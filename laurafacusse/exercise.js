var exercise = {};

var records = exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------

var length = data.length;
return length;
}
 
var crimes = exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------


var counter = 0
for (var i = 0; i<data.length; i++){
    var row = data[i];
    var rowDistrict = row[19]
    if (rowDistrict === district) {
        counter++
    }
}
return counter

}

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------

var counter = 0
for (var i = 0; i<data.length; i++){
    var row = data[i];
    var rowtheft = row[13]
    if (rowtheft === primaryType) {
        counter++
    }
}
return counter
}


exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var counter = 0
    for (var i = 0; i<data.length; i++){
        var row = data[i];
        var rowtheft = row[13]
        if (rowtheft === location) {
            counter++
        }
    }
    return counter
    }

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
    point.latitude = crime[41.865409818];
    point.longitude = crime[-87.706856955];
    return point; 
    
};



