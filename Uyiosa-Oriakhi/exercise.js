var exercise = {};

exercise.countRecords = function(data){

    return data.length;
    // var total = chicago.data.reduce(function(acc,cur){
    //     return acc + cur
    // },0);

    // console.log(total)
    //     //-------------------------------------------
    // // YOUR CODE
    // // Return the total number of records
    // //-------------------------------------------
    // return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){

    var total = data.reduce(function(acc,cur){
        
        if (cur[19]===district){
            
        acc+=1;
        }
        return acc;

    },0);
    // var counter=0

    // for (i=0;i<data.length; i++)
    // {
    //     if (chicago.data[i][19]===district){
    //         counter +=1

    //     }
    
    // 
    return total;
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    // return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    var sum = data.reduce(function(acc,cur){
        
        if (cur[13]===primaryType){
            
        acc+=1;
        }
        return acc;

    },0);
    return sum;
    
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    
};

exercise.countLocation = function(data,location){

    var summation = data.reduce(function(acc,cur){
        
        if (cur[15]===location){
            
        acc+=1;
        }
        return acc;

    },0);
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    return summation;
};


exercise.buildLatLngPoint = function(crime){
    // console.log(crime)
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
    //-------------------------------------------    
    
};




