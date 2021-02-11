function convertHour(){
    var hours = document.getElementById('hourinput').value;
    var secondsInHours = hours*3600;
    var outputSeconds =   document.getElementById('ans').innerHTML = `Seconds in ${hours}hour is ${secondsInHours} ` ;
    return outputSeconds;
}

function convertAge(){
    var age = document.getElementById('ageinput').value;
    var daysInAge = age*365;
    var outputSeconds =   document.getElementById('ans').innerHTML = `Age in ${age}year is ${daysInAge}days ` ;
    return outputSeconds;
}

function leapfinder(){
    var year = document.getElementById('yearinput').value;
    if( year%4 === 0 ){
        if(year%100 === 0){
            if(year%400 === 0){
                var leapYear =   document.getElementById('ans').innerHTML = `${year} is a Leap Year ` ;
                return leapYear;
            }
            else{
                var leapYear =   document.getElementById('ans').innerHTML = `${year} is not a Leap Year ` ;
                return leapYear;
            }
        }
        else{
            var leapYear =   document.getElementById('ans').innerHTML = `${year} is a Leap Year ` ;
            return leapYear;
        }

    }
    else{
        var leapYear =   document.getElementById('ans').innerHTML = `${year} is not a Leap Year ` ;
        return leapYear;
    }
    
}

function coronadetector(){
    var newCases = document.getElementById('newcasesinput').value;
    var recoverCases = document.getElementById('recovercasesinput').value;
    var activeCases = document.getElementById('activecasesinput').value;
    if(newCases < recoverCases){
    var totalDays = 0;
    while(activeCases !=0 && activeCases>0){
        activeCases -=(recoverCases - newCases);
        totalDays++
        var daysToEnd =   document.getElementById('ans').innerHTML = `InshaaAllah, Corona will end in ${totalDays} days ` ;
       
    }
}
else{
    var daysToEnd =   document.getElementById('ans').innerHTML = `New Casses is always less then Recover Cases per day ` ;
   
}
return daysToEnd;
    
}


function equalString(){
    var inputOneString = document.getElementById('stringoneinput').value;
    var inputTwoString = document.getElementById('stringtwoinput').value;
    var inputOneLength = inputOneString.length ;
    var inputTwoLength = inputTwoString.length ;
    if(inputOneLength === inputTwoLength){
        var checkstring =   document.getElementById('ans').innerHTML = `strings are Equal` ;
        return checkstring;
    }
    else{
        var checkstring =   document.getElementById('ans').innerHTML = `strings Aren't equal` ;
        return checkstring;
    }
    
}

function toStringArray(){
    var inputStringOne = document.getElementById('oneinput').value;
    var inputStringTwo = document.getElementById('twoinput').value;
    var inputStringThree = document.getElementById('threeinput').value;
    var array = [inputStringOne , inputStringTwo , inputStringThree];
    var arrayTostring = array.map(el => el.toString()) ;
    var toStringArray =   document.getElementById('ans').innerHTML = `The array [${array}] is now [${arrayTostring}] have all element, string type` ;
    return toStringArray;
}

function invertArray(){
    var firstValue = document.getElementById('arrayoneinput').value;
    var secondValue = document.getElementById('arraytwoinput').value;
    var thirdValue = document.getElementById('arraythreeinput').value;
    var arrays = [firstValue , secondValue , thirdValue];
    var arrays2 = arrays.map(myFunction);
    function myFunction(value, index, array) {
     return value * (-1);
    }
    var invertArrayOutput =   document.getElementById('ans').innerHTML = `[${arrays}] After Invert, Array is [ ${arrays2}]` ;
    return invertArrayOutput ;
    }


