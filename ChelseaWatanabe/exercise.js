var exercise = {};

exercise.countRecords = function(data){
    return data.length;
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    console.log(data);
    var matching = data.reduce(function(number,current){
    if (current[19] == district){
        number += 1;
    }
    return number;
    },0);

    return matching;
    };
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    return 'Error: countDistrictCrimes not implemented'; 


exercise.countPrimaryType = function(data,primaryType){
    var matching = data.reduce(function(number,current){
        if (current[13] == primaryType){
        number += 1;
        }
        return number;
        },0);
        return matching;
        };
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    return 'Error: countPrimaryType not implemented';


exercise.countLocation = function(data,location){
    var matching = data.reduce(function(number,current){
        if (current[11] == location){
        number += 1;
        }
        return number;
        },0);
        return matching;
        };
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    return 'Error: countLocation not implemented';



exercise.buildLatLngPoint = function(crime){
    var point = {};
point.latitude = crime[26];
point.longitude = crime[28];
return point;
};
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
    return 'Error: buildLatLngPoint not implemented';
