function getAreaOfCircle(radius){
    const pi = 3.14;
    var area = (pi * radius) ** 2;
    return area;
}

function odd_even(input_number){
    if(value % 2 == 0){
        return "odd"
    }else{
        return "even"
    }
    
}
function doCheck(value1){
    char = char.toLowerCase();
    if(value1 == "a"||value1 == "e"||value1 == "i"||value1 == "o" ||value1 == "u"){
        return "vowel";
    }else{
        return "consonant";
    }
    
}

function getCalendarMonthDays(monthName){
    monthName = monthName.toLowerCase();
    switch(monthName){
        case "April":
        case "September":
        case "June":
        case "November":
            return "30";
        case "February":
            return "28";
        default:
            return "31";   
    }
}

function vowelOrConsonant(){
    
}
