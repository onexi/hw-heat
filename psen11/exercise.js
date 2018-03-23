var exercise = {};

exercise.countRecords = function(data){
   
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var count = 0;
    data.forEach(function(item,index){
        dist = item[19];
        //console.log(dist);
        //console.log(district);
        if (dist==district){
            count = count+1;
        };
     });
     return count; 
};

exercise.countPrimaryType = function(data,primaryType){
    
    var number = 0;
    data.forEach(function(item,index){
        if(item[13]==primaryType){
            number = number+1;
        };
    });
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    return number;
};

exercise.countLocation = function(data,location){
    var count = 0;
    data.forEach(function(item,index){
        //console.log(item[15]);  
        if (item[15]==location){
            count = count+1;
        };
    });
    
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    return count;
};


exercise.buildLatLngPoint = function(crime){
   
    var point = {};
    point.latitude = crime[29][1];
    point.longitude = crime[29][2];
    return point;
};




