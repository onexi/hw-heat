var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    //console.log(data.length); 
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    var counter = 0; 
    // for(var i = 0; i<= data.length; i++){
    //     if(Number(data[i][19])===Number(district)){counter +=1}
    // }; 
    data.forEach(function(element, index){
        if(data[index][19] === district){ counter += 1;};
    }); 
    //console.log(counter); 
    return counter; 
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    //coun thte number of crimes in a specific distrunct, district 18 in this case 
    //looks like both are strings 
    // for the given district
    //-------------------------------------------

};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    //
    var counter = 0; 
    data.forEach(function(element, index){
        if(primaryType===data[index][13]){counter+= 1;};
    }); 
    //console.log(counter); 
    return counter;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var counter = 0; 
    data.forEach(function(element,index){
        if(element[15]===location){counter += 1}
        //the code below pull the addresses of crimes with a 'ST" address, not the classification 
       // if((location === "STREET")&&(data[index][11].indexOf("ST")!=-1)){counter+= 1;};
    }); 
    //console.log(counter); 
    //this value should be 5434 - got it 
    //trouble here 
    //console.log('the street thing'); 
    return counter;
};

exercise.buildLatLngPoint = function(crime){
    //so crime here is like element
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    console.log('this is the points bit'); 
    return point;    
    //-------------------------------------------    
    
   
};




