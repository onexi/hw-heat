var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    console.log(data);
    return data.length;
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district - DISTRICT IS ALREADY SET TO 018
    //-------------------------------------------
    console.log(district);
    var total = data.reduce(function(previous,current){
        if(current[19]==district){
            console.log("adding previous");
            return ++previous;
        }
            return previous;
    },0);
    console.log("print" + total);
    return total;
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type - THEFT IS [13] IN ARRAY
    //-------------------------------------------
    console.log(primaryType);
    var total = data.reduce(function(previous,current){
        if(current[13]==primaryType){
            return ++previous;
        }
            return previous;
    },0);
    console.log("print" + total);
    return total;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location - STREET IS [15] IN ARRAY
    //-------------------------------------------
    console.log(location);
    var total = data.reduce(function(previous,current){
        if(current[15]==location){
            return ++previous;
        }
            return previous;
    },0);
    console.log("print" + total);
    return total;
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




