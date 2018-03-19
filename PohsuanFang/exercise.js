var exercise = {};
// var fs=require('fs');
//     var myData=fs.readFileSync("crime_2012_december.json","utf8");
//     var record=JSON.parse(myData);
    
exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    return data.length; 
};
// var numberOfRecords=exercise.countRecords();
// console.log(numberOfRecords);

// var recordData=record.data;
exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
var count=0;
 data.forEach(function(item,i){
    if (item[11].includes(district)==true){count+=1;}
 });
    return count; 
    
};
// var result=exercise.countDistrictCrimes(recordData,'031');
// console.log(result);

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    var count=0;
    data.forEach(function(item){
       if (item[13]==primaryType)
       {count+=1;}
    });
    return count;
    };
// var total=exercise.countPrimaryType(recordData,"ROBBERY");
// console.log(total);

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var count=0;
    data.forEach(function(item){
       if (item[15]==location)
       {count+=1;}
    });
    return count;
   
};
// var locationTotal=exercise.countLocation(recordData,"RESIDENCE");
// console.log(locationTotal);

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

// var points=exercise.buildLatLngPoint(recordData[1]);
// console.log(points);


